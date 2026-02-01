// Clase de configuracion base de axios usando typeScript y manejo de errores
import axios, { AxiosError } from 'axios';
import type { AxiosInstance, AxiosResponse } from 'axios';

class AxiosConfig {
    private adapter: AxiosInstance;

    constructor() {
        this.adapter = axios.create({
            baseURL: import.meta.env.VITE_API_URL,
            timeout: 5000,
            headers: { 'Content-Type': 'application/json' }
        });

        this.inicialicerInterceptors();
    }

    private inicialicerInterceptors(): void {
        this.adapter.interceptors.response.use(
            this.handleResponse as any,
            this.handleError
        );
    }

    public handleResponse<T>(response: AxiosResponse<T>): T {
        return response.data;
    }

    public handleError(error: AxiosError): void {
        if (error.response) {
            console.error('Error de respuesta:', error.response.data);
            console.error('Codigo de estado:', error.response.status);
        }
        else if (error.request) {
            console.error('No se recibió respuesta:', error.request);
        }
        else {
            console.error('Error al configurar la solicitud:', error.message);
        }
    }

    get<T>(url: string, params?: any): Promise<T> {
        return this.adapter.get<T>(url, { params }) as Promise<T>;
    }
}

export const httpClient = new AxiosConfig();