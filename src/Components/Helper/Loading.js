import React from 'react';
import styles from './Loading.module.css'
import * as loadingAnimation from '../../Assets/loading.mp4.lottie.json'
import Lottie from 'react-lottie';

const Loading = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.loading}>
        <Lottie options={defaultOptions}/>
      </div>
    </div>
    );
};

export default Loading;