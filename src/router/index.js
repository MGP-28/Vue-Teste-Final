import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { 
    name: 'tasks', 
    path: '/', 
    component: () => import('./../views/Tasks.vue') 
  },
  { 
    name: 'task', 
    path: '/task/:id', 
    component: () => import('./../views/Task.vue') 
  },
  { 
    name: 'taskEdit', 
    path: '/task/edit/:id', 
    component: () => import('./../views/TaskEdit.vue') 
  },
  {
    name: 'notFound',
    path: "/:pathMatch(.*)", 
    component: () => import('./../views/notFound.vue') 
  }

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