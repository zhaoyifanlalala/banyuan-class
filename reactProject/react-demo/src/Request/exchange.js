import request from '../Common/request';
import { host } from '../Common/config';

export async function exchangeShop (id){

  const result = await request({
    url:`${host}/shop/exchange`,
    method:'put',
    data:{ id }
  });
  return result;
}
