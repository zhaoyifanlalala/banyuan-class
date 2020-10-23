
import React,{ useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loadUser } from '../User/state/action';
import './mall.css';
import Menu from '../Menu/Menu';
// import { loadShop } from '../Menu/state/action';

export default function Mall () {

  /* eslint-disable */ 
  const dispatch = useDispatch();

  const history = useHistory();

  const user = useSelector(state => state.user.user);

  useEffect(() => {
    dispatch(loadUser(history));
  }, []);

  

  return (
    <div className="mall-main">
      <div className="mall-container">
        <div className="step-flag">
            <p>商城</p>
          </div>
          <div className="my-integral">
            <h2 className="pre-price">当前积分</h2>
            <h3>{ user.integration }</h3>
          </div>
          <div className="pro-main">
            <h1>商品列表</h1>
            <div className="pro-list">
              {/* <div className="pro-item"> */}
                  <Menu></Menu>
                
                
              {/* </div> */}

            </div>
          </div>
      </div>

    </div>
  );
}
