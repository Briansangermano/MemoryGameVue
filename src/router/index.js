import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login.vue";
import Profile from "../components/Profile.vue";
import Players from "../components/Players.vue";
import Game from "../components/Game.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/signIn",
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
  },
  {
    path: "/game",
    name: "Game",
    component: Game,
  },
  {
    path: '*',
    redirect: '/signIn'
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
