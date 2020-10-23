import * as ActionType from '../../../Redux/ActionType';

import { loadUserInfo } from '../../../Request/user';

export function loadUser (history){
  return async (dispatch)=>{
    try {
      dispatch({ type: ActionType.SHOW_LOADING });
      const user = await loadUserInfo({ id:'5f9128367cac8518b1099c28' });

      dispatch({ type:ActionType.LOAD_USER,data:{ user } });
      dispatch({ type:ActionType.HIDE_LOADING });
    } catch (error) {
      dispatch({ type: ActionType.SHOW_MODAL,data:{ message:error.message, func:()=>{

        console.log( error );
        history.push('/user');

      } } });
    }finally{
      dispatch({ type:ActionType.HIDE_LOADING });
    }
  };
}

