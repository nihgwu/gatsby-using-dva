import { delay } from '../utils'

export default {
  namespace: 'app',
  state: {
    count: 0,
  },
  reducers: {
    increment(state) {
      return { count: state.count + 1 }
    },
    decrement(state) {
      return { count: state.count - 1 }
    },
  },
  effects: {
    *delayed({ payload: { timeout } }, { put }) {
      yield delay(timeout)
      yield put({ type: 'increment' })
    },
  },
  subscriptions: {
    setup({ history, dispatch }) {
      history.listen(({ pathname }) => {
        console.log(pathname)
      })
    },
  },
}
