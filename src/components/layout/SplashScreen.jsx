import React from 'react';
import { useLottie } from 'lottie-react';
import googleLogoAnimation from '../../assets/lottie/google-logo.json'; // Import the animation data
import './SplashScreen.css'; // For styling

const SplashScreen = () => {
  const options = {
    animationData: googleLogoAnimation,
    loop: false, // We only want it to play once
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
    <div className="splash-screen">
      <div className="splash-animation-container">
        {View}
      </div>
    </div>
  );
};

export default SplashScreen;