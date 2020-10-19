import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "../views/About.js")
  },
  // {
  //   path: "/test",
  //   name: "Test",
  //   component: () => import(/* webpackChunkName: "about" */ "../views/Test.js")
  // },
  {
    path: "/ant",
    name: "Ant",
    component: () => import(/* webpackChunkName: "about" */ "../views/Ant.js")
  },
  {
    path: "/observable",
    name: "Observable",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/observable/parent")
  },
  {
    path: "/detail",
    name: "Detail",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/observable/detail")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
