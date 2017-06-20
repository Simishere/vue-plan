import * as types from './mutation-types'

export default {
  [types.ADD_TOTAL_TIME] (state, time) {
    state.totalTime = state.totalTime + ~~time
  },
  [types.DEC_TOTAL_TIME] (state, time) {
    state.totalTime = state.totalTime - time
  },
  [types.SAVE_PLAN] (state, plan) {

    const avatar = 'http://tva3.sinaimg.cn/crop.0.0.390.390.180/40dfde6fjw8f2a2j1joaej20b40b4aak.jpg';

    state.list.push(
      Object.assign({ name: '二哲', avatar: avatar }, plan)
    )
  },
  [types.DELETE_PLAN] (state, idx) {
    state.list.splice(idx, 1);
  }
};
