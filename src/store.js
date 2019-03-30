import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let {
  localStorage: ls
} = window

if (!ls.getItem('user') || !ls.getItem('adminUser')) {
  ls.setItem('user', JSON.stringify([{
    name: 'admin',
    password: 'admin'
  }]))
  ls.setItem('adminUser', JSON.stringify([{
    name: 'admin2',
    password: 'admin2'
  }]))
}

if (!ls.getItem('ticketList')) {
  ls.setItem('ticketList', JSON.stringify([]))
}

if (!ls.getItem('hotelList')) {
  ls.setItem('hotelList', JSON.stringify([]))
}

if (!ls.getItem('articleList')) {
  ls.setItem('articleList', JSON.stringify([]))
}

String.prototype.parse = function () {
  return JSON.parse(this)
}

export default new Vuex.Store({
  state: {
    user: ls.getItem('user').parse(),
    loginName: '',
    adminUser: ls.getItem('adminUser').parse(),
    adminName: '',
    ticketList: ls.getItem('ticketList').parse(),
    hotelList: ls.getItem('hotelList').parse(),
    articleList: ls.getItem('articleList').parse()
  },
  mutations: {
    userReg(state, obj) {
      state.user.push(obj)
    },
    userLogin(state, name) {
      state.loginName = name
    },
    adminReg(state, obj) {
      state.adminUser.push(obj)
      ls.setItem('adminUser', JSON.stringify(state.adminUser))
    },
    adminEdit(state, obj) {
      console.log(obj);
      let all = state.adminUser.map(item => {
        console.log(item.name);
        if (item.name === obj.change) {
          return obj.item
        } else {
          return item
        }
      });
      state.adminUser = all
      ls.setItem('adminUser', JSON.stringify(state.adminUser))
    },
    adminLogin(state, name) {
      state.adminName = name
    },
    adminRemove(state, name) {
      let all = []
      state.adminUser.forEach(item => {
        if (item.name !== name) {
          all.push(item)
        }
      });
      state.adminUser = all
      ls.setItem('adminUser', JSON.stringify(all))
    },
    addHotel(state, obj) {
      state.hotelList.push(obj)
      ls.setItem('hotelList', JSON.stringify(state.hotelList))
    },
    addTicket(state, obj) {
      state.ticketList.push(obj)
      ls.setItem('ticketList', JSON.stringify(state.ticketList))
    },
    addArticle(state, obj) {
      state.articleList.push(obj)
      ls.setItem('articleList', JSON.stringify(state.articleList))
    },
    removeArtice(state, id) {
      let all = []
      state.articleList.forEach(item => {
        if (item.id !== id) {
          all.push(item)
        }
      });
      state.articleList = all
      ls.setItem('articleList', JSON.stringify(all))
    }
  },
  getters: {
    hotelCount(state) {
      return state.hotelList.length
    },
    getHotelPage: (state) => (page) => {
      return state.hotelList.slice((page - 1) * 10, page * 10)
    },
    ticketCount(state) {
      return state.ticketList.length
    },
    getTicketPage: (state) => (page) => {
      return state.ticketList.slice((page - 1) * 10, page * 10)
    },
    articleCount(state) {
      return state.articleList.length
    },
    getArticlePage: (state) => (page) => {
      return state.articleList.slice((page - 1) * 10, page * 10)
    }
  },
  actions: {

  }
})