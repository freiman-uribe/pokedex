<template>
    <footer>
        <div>
            <p>© 2026 Todos los derechos reservados.</p>
        </div>
    </footer>
</template>
<style>
    footer {
        margin-top: 2rem;
        border-top-width: 1px;
        border-color: rgba(255, 255, 255, 0.1);
        padding-top: 2rem;
        padding-bottom: 2rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    footer div {
        max-width: 80rem;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }

    footer .md\:flex-row {
        @media (min-width: 768px) {
            flex-direction: row;
        }
    }
    
    footer p {
        font-size: 0.875rem;
        line-height: 1.25rem;
        color: #6b7280;
    }

</style>