import React,{ useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
// import _ from 'lodash';
import { useHistory } from 'react-router-dom';
import { loadUser } from './state/action';
import './user.css';
import { BrowserRouter as Router,Link,Route,Switch } from 'react-router-dom';
import UserCenter from '../UserCenter/UserCenter';
import Mall from '../Mall/Mall';
// import { loadUserInfo } from '../../Request/user';

export default function User () {
  /* eslint-disable */ 
  const dispatch = useDispatch();

  const history = useHistory();

  const user = useSelector(state => state.user.user);

  useEffect(() => {
    dispatch(loadUser(history));
  }, []);

  let [ activeName,setName ] = useState();

  return (
    <Router>
      <div>
        <div className="home">
          <div className="slide-main">
            <div className="user-info-sider">
              <div>
                <img src={user.avatar} className="user-avatar" alt="" />
              </div>
              <div>
                <p className="userNickname">{ user.nickname }</p>
              </div>
            </div>
              <ul>
                <li className={ activeName === 'UserCenter' ? 'holdColor':null } onClick={ ()=>{ setName('UserCenter');} }>
                  <Link to="/user/userCenter" className="router-link center">个人中心</Link>
                </li>
                <li className={ activeName === 'Mall' ? 'holdColor' :null } onClick={ ()=>{ setName('Mall');} }>
                  <Link to="/user/mall" className="router-link point">积分商城</Link>
                </li>
                <li>退出</li>
              </ul>
          </div>
        </div>

        <div className="home-right">
          <Switch>
            <Route path="/user/userCenter" component={ UserCenter }></Route>
            <Route path="/user/mall" component={ Mall }></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
