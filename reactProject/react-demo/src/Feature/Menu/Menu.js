import React,{ useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';

import _ from 'lodash';

import { buyShop, loadShop } from './state/action';
import './menu.css';
import { useHistory } from 'react-router-dom';
import { loadUser } from '../User/state/action';
import { message } from 'antd';

export default function Menu () {
  /* eslint-disable */ 
  const dispatch = useDispatch();

  const history = useHistory();

  // const [showIcon,setShowIcon] = useState(true)

  const menu = useSelector(state => state.menu);
  // const user = useSelector(state => state.user.user);

  const success = () => {
    message.success('兑换成功');
  };
  

  useEffect(() => {
    dispatch(loadShop(history));
  }, []);
  
  useEffect(() => {
    dispatch(loadUser());
  }, []);


  function renderMenu (){
    return _.map(menu.list,(item)=>{
      return(
        <div key={ Math.random() } className="pro-item-main">
          <div className="pro-item-container">
            <img src={item.image} className="pro-pic" alt=""></img>
            <div className="pro-info">
              <h2 className="pro-item-name">{ item.name }</h2>
              <div className="pro-change">
                <div className="pro-integral">
                  <p className="price">{ item.price }积分</p>
                </div>
                  <button className="pro-btn" 
                  onClick={ 
                    ()=>{
                      dispatch(buyShop(item._id));
                      // alert('兑换成功')
                      success()
                  }}>兑换</button>
              </div>
            </div>
          </div>
        </div>
        
      );
    });
  }

  return (
    <div className="renderMenu">

      {renderMenu()}
    </div>
  );
}
