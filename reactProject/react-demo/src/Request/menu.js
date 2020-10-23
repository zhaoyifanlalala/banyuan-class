import request from '../Common/request';
import { host } from '../Common/config';

export async function loadShopList () {
  const result = await request({
    url: `${host}/shop/shopList`,
    method:  'get'
  });
  return result;
}