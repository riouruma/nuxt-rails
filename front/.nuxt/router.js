import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1bbad8e0 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _96f06594 = () => interopDefault(import('../pages/todos/index.vue' /* webpackChunkName: "pages/todos/index" */))
const _c91b56de = () => interopDefault(import('../pages/users/index.vue' /* webpackChunkName: "pages/users/index" */))
const _05b41c1f = () => interopDefault(import('../pages/users/new.vue' /* webpackChunkName: "pages/users/new" */))
const _1c03718e = () => interopDefault(import('../pages/users/_id.vue' /* webpackChunkName: "pages/users/_id" */))
const _2dfb1658 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/inspire",
    component: _1bbad8e0,
    name: "inspire"
  }, {
    path: "/todos",
    component: _96f06594,
    name: "todos"
  }, {
    path: "/users",
    component: _c91b56de,
    name: "users"
  }, {
    path: "/users/new",
    component: _05b41c1f,
    name: "users-new"
  }, {
    path: "/users/:id",
    component: _1c03718e,
    name: "users-id"
  }, {
    path: "/",
    component: _2dfb1658,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
