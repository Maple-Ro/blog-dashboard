import * as usersService from '../services/users';
export default {
  namespace: 'users',
  state: {
    list: [],
    total: null,
    page: null,
  },
  reducers: {
    save(state, { payload: { data: list, total, page } }) {
      return { ...state, list, total, page };
    },
  },
  effects: {
    *fetch({ payload: { page=1 } }, { call, put }) {
      const { data } = yield call(usersService.fetch, { page });
      yield put({
        type: 'save',
        payload: {
          data:data.data,
          total: parseInt(data.total, 10),
          page: parseInt(page, 10),
        },
      });

    },
    *del({payload:id}, {call, put}){
      yield call(usersService.del, id);
      yield put({type:'reload'});
    },
    *reload(action, {put,select}){
      const page=yield select(state=>state.users.page);
      yield put({type:'fetch', payload:{page}});
    },
    *patch({payload:{id,values}}, {call, put}){
      yield call(usersService.patch, id, values);
      yield put({type:'reload'});
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/users') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};
