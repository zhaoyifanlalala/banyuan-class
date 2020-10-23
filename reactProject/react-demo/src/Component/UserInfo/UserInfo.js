import React,{ useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loadUser } from '../../Feature/User/state/action';
import './userInfo.css';

export default function UserInfo () {
  /* eslint-disable */
  const dispatch = useDispatch();

  const history = useHistory();

  const user = useSelector(state => state.user.user);

  useEffect(() => {
    dispatch(loadUser(history));
  }, []);

  return (
    <div>
      {/* 个人信息 */}
      <div className="tab1-container">

        <img src={ user.avatar } className="user-avatar" alt=""></img>
        <div className="user-info">
          <div className="user-item-info">
            <span>姓名：</span>
            <span>{ user.username }</span>
          </div>
          <div className="user-item-info">
            <span>学校：</span>
            <span>{ user.school }</span>
          </div>
          <div className="user-item-info">
            <span>昵称：</span>
            <span>{ user.nickname }</span>
          </div>
          <div className="user-item-info">
            <span>性别：</span>
            <span>{ user.sex == 1 ? '男' : '女' }</span>
          </div>
          <div className="user-item-info">
            <span>密码：</span>
            <span>******</span>
          </div>
        </div>

      </div>
    </div>
  );
}
