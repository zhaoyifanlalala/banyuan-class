import * as ActionType from '../../../Redux/ActionType';
import { loadShopList } from '../../../Request/menu';
import { exchangeShop } from '../../../Request/exchange';
import { loadUserInfo } from '../../../Request/user';

export function loadShop (){
  return async (dispatch)=>{

    try {
      // dispatch({ type: ActionType.SHOW_LOADING });

      const { list } = await loadShopList();

      console.log(list);

      dispatch({ type:ActionType.LOAD_SHOP,data:{ list } });

      // dispatch({ type:ActionType.HIDE_LOADING });

    } catch (error) {
      // dispatch({ type: ActionType.SHOW_MODAL,data:{ message:error.message, func:()=>{

      console.log( error );

      // } } });
    }finally{

      // dispatch({ type:ActionType.HIDE_LOADING });
    }

  };
}

export function buyShop (id){

  return async (dispatch)=>{

    try {

      const result = await exchangeShop(id);

      console.log(result);

      dispatch({ type: ActionType.BUY_SHOP });

      const user = await loadUserInfo({ id:'5f9128367cac8518b1099c28' });

      dispatch({ type:ActionType.LOAD_USER,data:{ user } });

    } catch (error) {

      console.log('error====>',error);
    }

  };
}