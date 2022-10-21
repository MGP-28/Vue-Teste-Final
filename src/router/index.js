import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { 
    name: 'contacts', 
    path: '/', 
    component: () => import('./../views/Contacts.vue') 
  },
  { 
    name: 'contactEdit', 
    path: '/contact/:id/edit', 
    component: () => import('./../views/ContactEdit.vue') 
  },
  { 
    name: 'contact', 
    path: '/contact/:id', 
    component: () => import('./../views/Contact.vue') 
  },
  { 
    name: 'contactNew', 
    path: '/new', 
    component: () => import('./../views/ContactEdit.vue') 
  },
  {
    name: 'notFound',
    path: "/:pathMatch(.*)", 
    component: () => import('./../views/notFound.vue') 
  },

  // Routes Examples

  //   { 
  //     name: 'usersDetail',
  //     path: '/users/:id?', 
  //     component: Load.lazyload('./../views/UserDetail.vue') 
  //   },

      // Routes not FOund

  //   { 
  //     path: "/:pathMatch(.*)*", 
  //     component: Load.lazyload('./../views/PageNotFound.vue') 
  //   }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;