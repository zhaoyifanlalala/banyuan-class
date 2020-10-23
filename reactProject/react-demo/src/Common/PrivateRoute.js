import React from 'react';
import PropTypes from 'prop-types';
import { Route,Redirect } from 'react-router-dom';

export default function PrivateRouter ({ component: Component , ...rest }) {

  //    let user = localStorage.getItem('user');

  let auth = true;

  return (

    <Route { ...rest } render={ ()=>{

      return (

        auth ? <Component/> : <Redirect to='/login'></Redirect>
      );

    } } ></Route>

  );
}

PrivateRouter.propTypes = {
  component: PropTypes.func
};