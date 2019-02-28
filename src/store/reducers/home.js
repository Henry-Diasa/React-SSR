import * as types from '../action-types';
let initState = { list: [] }
export default (state = initState, action) => {
  switch (action.type) {
    case types.SET_HOME_LIST:
      /*  把 aciton 的payload 属性赋值进来 */
      return { list: action.payload };
    default:
      return state;
  }
};
