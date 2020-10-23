import React from 'react';
import './loading.css';
import { useSelector } from 'react-redux';

import LoadingImage from '../../Assest/loading.gif';

export default function Loading () {

  const isShow = useSelector(state => state.loading.isLoading);

  return (
    isShow ?
      <div className="loading">
        <div className="loading-container">
          <img src={ LoadingImage } alt='loading'></img>
        </div>
      </div> : null
  );
}
