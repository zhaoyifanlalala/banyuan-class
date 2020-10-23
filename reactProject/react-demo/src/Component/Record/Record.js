import React,{ useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loadUser } from '../../Feature/User/state/action';
import './record.css';
import moment from 'moment';

export default function Record () {

  /* eslint-disable */
  const dispatch = useDispatch();

  const history = useHistory();

  const user = useSelector(state => state.user.user);

  useEffect(() => {
    dispatch(loadUser(history));
  }, []);

  function renderRecord(){
    return _.map(user.record,(item)=>{
      return (
        <div key={ Math.random() }>
          <div className="tab2-container">
            <div className="tab2-list">
              <div className="tab2-item">
                <img className="list-img" src={ item.image } alt=""></img>
                <h2 className="list-name">{ item.name }</h2>
                <h3 className="changeDate">{ moment(item.exchangeDate).format('YYYY-MM-DD') }</h3>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <div>
        { renderRecord() }
    </div>
  );
}
