import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '幻影在线教育后台首页', icon: 'dashboard' }
    }]
  },
 

  {
    path: '/teacher',
    component: Layout,
    redirect: '/teacher/table',
    name: '讲师管理',
    meta: { title: '讲师管理',icon: 'people' },
    children: [
      {
        path: 'table',
        name: '讲师列表',
        component: () => import('@/views/edu/teacher/list'),
        meta: { title: '讲师列表',icon: 'table' }
      },
      {
        path: 'save',
        name: '添加讲师',  
        component: () => import('@/views/edu/teacher/save'),
        meta: { title: '添加讲师',icon: 'tree' }
      },
      {
        path: 'edit/:id',   
        name: 'EduTeacherEdit',
        component: () => import('@/views/edu/teacher/save'),
        meta: { title: '编辑讲师', noCache: true },
        hidden: true
      }
    ]
  },

  {
    path: '/subject',
    component: Layout,
    redirect: '/subject/list',
    name: '课程分类管理',
    meta: { title: '课程分类管理',icon: 'example' },
    children: [
      {
        path: 'list',
        name: '课程分类列表',
        component: () => import('@/views/edu/subject/list'),
        meta: { title: '课程分类列表',icon: 'table' }
      },
      {
        path: 'save',
        name: '添加课程分类',  
        component: () => import('@/views/edu/subject/save'),
        meta: { title: '添加课程分类',icon: 'excel'  }
      }
    ]
  },

  {
    path: '/course',
    component: Layout,
    redirect: '/course/list',
    name: '课程管理',
    meta: { title: '课程管理',icon: 'tab' },
    children: [
      {
        path: 'list',
        name: '课程列表',
        component: () => import('@/views/edu/course/list'),
        meta: { title: '课程列表' ,icon: 'table'}
      },
      {
        path: 'info',
        name: '添加课程',  
        component: () => import('@/views/edu/course/info'),
        meta: { title: '添加课程',icon:"tree" }
      },
      {
        path: 'info/:id',
        name: 'EduCourseInfoEdit',
        component: () => import('@/views/edu/course/info'),
        meta: { title: '编辑课程基本信息', noCache: true },
        hidden: true
      },
      {
        path: 'chapter/:id',
        name: 'EduCourseChapterEdit',
        component: () => import('@/views/edu/course/chapter'),
        meta: { title: '编辑课程大纲', noCache: true },
        hidden: true
      },
      {
        path: 'publish/:id',
        name: 'EduCoursePublishEdit',
        component: () => import('@/views/edu/course/publish'),
        meta: { title: '发布课程', noCache: true },
        hidden: true
      }
    ]
  },

  {
    path: '/sta',
    component: Layout,
    redirect: '/sta/create',
    name: '统计分析',
    meta: { title: '统计分析',icon:"chart" },
    children: [
      {
        path: 'create',
        name: '生成数据',
        component: () => import('@/views/sta/create'),
        meta: { title: '生成数据',icon:"edit" }
      },
      {
        path: 'show',
        name: '图表显示',
        component: () => import('@/views/sta/show'),
        meta: { title: '图表显示',icon:"eye" }
      }
    ]
  },
  {
    path: '/banner',
    component: Layout,
    redirect: '/banner/list',
    name: 'Banner管理',
    meta: { title: 'Banner管理',icon: 'banner' },
    children: [
      {
        path: 'list',
        name: 'Banner列表',
        component: () => import('@/views/banner/list'),
        meta: { title: 'Banner列表',icon: 'table' }
      },
      {
        path: 'save',
        name: '添加Banner',  
        component: () => import('@/views/banner/save'),
        meta: { title: '添加Banner',icon: 'tree' }
      },
      {
        path: 'edit/:id',   
        name: 'EduTeacherEdit',
        component: () => import('@/views/banner/save'),
        meta: { title: '编辑Banner', noCache: true },
        hidden: true
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    redirect: 'user/list',
    name: '用户管理',
    children: [{
      path: 'list',
      name: '用户管理',
      component: () => import('@/views/user/list'),
      meta: { title: '用户管理', icon: 'user' }
    }]
  },
  

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form' }
      }
    ]
  },

 

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
