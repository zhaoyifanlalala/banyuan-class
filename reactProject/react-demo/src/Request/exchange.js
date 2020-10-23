import request from '../Common/request';
import { host } from '../Common/config';

export async function exchangeShop (data){

  const result = await request({
    url:`${host}/shop/exchange`,
    method:'put',
    data
  });
  return result;
}
