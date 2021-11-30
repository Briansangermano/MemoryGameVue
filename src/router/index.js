import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login.vue";
import Profile from "../components/Profile.vue";
import Players from "../components/Players.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/players",
    name: "Players",
    component: Players,
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
