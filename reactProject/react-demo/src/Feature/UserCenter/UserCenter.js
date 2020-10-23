import React,{ useState }  from 'react';
import './userCenter.css';
import UserInfo from '../../Component/UserInfo/UserInfo';
import Record from '../../Component/Record/Record';

export default function UserCenter () {

  let [ activeName,setName ] = useState('UserInfo');

  return (
    <div>
      <div className="right-container">
        <div className="header">
          <h2 className={ activeName === 'UserInfo' ? 'borderBbottom' : null } onClick={ ()=>{ setName('UserInfo');} }>个人信息</h2>
          <h2 className={ activeName === 'Record' ? 'borderBbottom' : null } onClick={ ()=>{ setName('Record');} }>兑换记录</h2>
        </div>
        <div className="content">
          { activeName === 'UserInfo' ? <UserInfo></UserInfo> : <Record></Record> }
        </div>
      </div>

    </div>
  );
}
