import * as ActionType from '../ActionType';

export function showLoading (){

  return (dispatch) =>{

    dispatch({ type:ActionType.SHOW_LOADING });
  };
}

export function hideLoading (){

  return (dispatch) =>{

    dispatch({ type:ActionType.HIDE_LOADING });
  };
}