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
}
