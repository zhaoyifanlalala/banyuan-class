import request from '../Common/request';
import { host } from '../Common/config';

export async function loadUserInfo (data) {
  const result = await request({
    url: `${host}/user/userinfo`,
    // url:'http://49.235.98.65:3000/admin/shopList',
    method:  'get',
    data
  });
  return result;
}