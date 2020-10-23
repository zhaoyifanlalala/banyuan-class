import React from 'react';
import User from '../Feature/User/User';

export const routerConfig = [
  {
    path:'/a',
    component: ()=>{

      return (
        <div>A</div>
      );
    }
  },

  {
    path:'/user',
    component: User
  },

  {
    path:'*',
    component:()=>{
      return (
        <div>404</div>
      );
    }
  },
];