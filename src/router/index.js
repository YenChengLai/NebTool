import {
  createRouter,
  createWebHistory
} from 'vue-router';
import loginView from "@/views/login.vue";
import organizationView from "@/views/organization.vue";
import siteView from "@/views/site.vue";
import deviceView from "@/views/device.vue";
import aboutView from "@/views/about.vue";
import otheriew from "@/views/other.vue";
import changeOwnerView from "@/views/change-owner.vue";
import openapiKeyView from "@/views/openapi-key.vue";
import extendTrialView from "@/views/extend-trial.vue";


const routes = [
  {
      path: "/",
      alias: "/login",
      name: "login",
      component: loginView,
      meta: {
          index: 'login',
          title: 'login',
          icon: 'login',
          visible: false,
          requiresAuth: false
      }
  },
  {
      path: '/organization',
      name: 'organization',
      component: organizationView,
      meta: {
          index: 'organization',
          title: 'organization',
          icon: 'organization',
          visible: true,
          requiresAuth: true
      }
  },
  {
      path: '/site',
      name: 'site',
      component: siteView,
      meta: {
          index: 'site',
          title: 'site',
          icon: 'site',
          visible: true,
          requiresAuth: true
      }
  },
  {
      path: '/device',
      name: 'device',
      component: deviceView,
      meta: {
          index: 'device',
          title: 'device',
          icon: 'device',
          visible: true,
          requiresAuth: true
      }
  },
  {
      path: '/request',
      name: 'request',
      meta: {
          index: 'request',
          title: 'request',
          icon: 'request',
          visible: true,
          requiresAuth: true
      },
      children: [
        { path: "change-owner",
          component: changeOwnerView,
          meta: {
            index: 'change-owner',
            title: 'change-owner',
            icon: 'change-owner',
            visible: true,
            requiresAuth: true
        }
        },
        {
          path: "extend-trial",
          component: extendTrialView,
          meta: {
            index: 'extend-trial',
            title: 'extend-trial',
            icon: 'extend-trial',
            visible: true,
            requiresAuth: true
        }
        },
        {
          path: "openapi-key",
          component: openapiKeyView,
          meta: {
            index: 'openapi-key',
            title: 'openapi-key',
            icon: 'openapi-key',
            visible: true,
            requiresAuth: true
        }
        },
      ],

  },
  {
      path: '/other',
      name: 'other',
      component: otheriew,
      meta: {
          index: 'other',
          title: 'other',
          icon: 'other',
          visible: true,
          requiresAuth: true
      }
  },
  {
      path: '/about',
      name: 'about',
      component: aboutView,
      meta: {
          index: 'about',
          title: 'about',
          icon: 'about',
          visible: true,
          requiresAuth: true
      }
  },
  // Add more specific routes under each category if needed
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth && !sessionStorage.getItem("token")) {
//     next('/login');
//   } else {
//     next(); // Ensure that navigation continues if the condition is not met
//   }
// });


export default router;