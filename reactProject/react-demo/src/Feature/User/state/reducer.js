import * as ActionType from '../../../Redux/ActionType';

const initialState = { user:{} };

export default (state = initialState, payload) => {

  switch (payload.type) {
  case ActionType.LOAD_USER:
    // console.log(payload);
    return {
      ...state,
      user:payload.data.user
    };
  default:
    return state;
  }
};