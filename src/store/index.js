import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

const state = {
  totalTime: 0,
  list: [
    {
      name: 'Youliga',
      avatar: 'http://tva3.sinaimg.cn/crop.0.0.390.390.180/40dfde6fjw8f2a2j1joaej20b40b4aak.jpg',
      date: '2017-6-1',
      totalTime: '3',
      comment: '晚上和同学聚餐'
    }
  ]
};

export default new Vuex.Store({
  state,
  mutations,
  actions
})

