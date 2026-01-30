import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Pokedex",
    component: () => import("../views/ViewPokedex.vue"),
    meta: {
      title: "Pokedex",
    },
  },
  {
    path: "/team",
    name: "Mi equipo",
    component: () => import("../views/ViewTeam.vue"),
    meta: {
      title: "Mi-equipo",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("../views/ViewPokedex.vue"),
    meta: {
      title: "Página no encontrada",
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // scrollBehavior(_to, _from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition;
  //   }
  //   return { top: 0 };
  // },
});

// Actualizar el título de la página
router.beforeEach((to, _from, next) => {
  const title = (to.meta.title as string) || "Pokedex";
  document.title = title;
  next();
});

export default router;
