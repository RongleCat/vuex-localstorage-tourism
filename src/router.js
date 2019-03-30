import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import HomeIndex from './views/home/Index.vue'
import HomeDynamic from './views/home/Dynamic.vue'
import HomeFood from './views/home/Food.vue'
import HomeHotel from './views/home/Hotel.vue'
import HomeTicket from './views/home/Ticket.vue'
import HomeContact from './views/home/Contact.vue'
import HomeLogin from './views/home/Login.vue'
import HomeRegister from './views/home/Register.vue'
import HomeNewsDetail from './views/home/NewsDetail.vue'
import Admin from "./views/Admin.vue"
import AdminLogin from "./views/admin/Login.vue"
import AdminAccount from "./views/admin/Account.vue"
import AdminIndex from "./views/admin/Index.vue"
import AdminHotel from "./views/admin/Hotel.vue"
import AdminTicket from "./views/admin/Ticket.vue";
import AdminArticle from "./views/admin/Article.vue";
import AdminArticleAdd from "./views/admin/ArticleAdd.vue";


import HomeNewsDetail_1 from './views/article/article_1.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Home,
    children: [{
      path: '',
      name: 'home-index',
      component: HomeIndex,
    }, {
      path: '/dynamic',
      name: 'home-dynamic',
      component: HomeDynamic,
    }, {
      path: '/food',
      name: 'home-food',
      component: HomeFood,
    }, {
      path: '/hotel',
      name: 'home-hotel',
      component: HomeHotel,
    }, {
      path: '/ticket',
      name: 'home-ticket',
      component: HomeTicket,
    }, {
      path: '/contact',
      name: 'home-contact',
      component: HomeContact,
    }, {
      path: '/news_detail',
      name: 'home-news_detail',
      component: HomeNewsDetail,
    }, {
      path: '/news_detail/1',
      name: 'home-news-detail-1',
      component: HomeNewsDetail_1,
    }]
  }, {
    path: '/login',
    name: 'home-login',
    component: HomeLogin
  }, {
    path: '/register',
    name: 'home-register',
    component: HomeRegister
  }, {
    path: '/admin/login',
    name: 'admin-login',
    component: AdminLogin
  }, {
    path: '/admin',
    component: Admin,
    children: [{
      path: '',
      name: 'admin-index',
      redirect: '/admin/info'
    }, {
      path: '/admin/account',
      name: 'admin-account',
      component: AdminAccount,
    },{
      path: '/admin/info',
      name: 'admin-info',
      component: AdminIndex,
    },{
      path: '/admin/hotel',
      name: 'admin-hotel',
      component: AdminHotel,
    },{
      path: '/admin/ticket',
      name: 'admin-ticket',
      component: AdminTicket,
    },{
      path: '/admin/article',
      name: 'admin-article',
      component: AdminArticle,
    },{
      path: '/admin/article/add',
      name: 'admin-article-add',
      component: AdminArticleAdd,
    }]
    
  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})