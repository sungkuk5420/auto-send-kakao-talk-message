import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./routes";

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

const Vant = require("vant");
import "vant/lib/index.css";

Vue.use(VueRouter);
Vue.use(Vant);
Vue.use(Antd)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function(/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  });

  return Router;
}
