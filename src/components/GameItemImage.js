import React, { useState, useRef, useEffect } from 'react';
import { elementInViewport } from "./../utils/clientHelper";


const GameItemImage = ({ backgroundImage, hasVideo}) => {
  const [loaded, setLoaded] = useState(false);
  const bgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!loaded && bgRef.current && elementInViewport(bgRef.current)) {
        // const bgUrl = formatImageUrl(backgroundImage, hasVideo);
        bgRef.current.style.backgroundImage = `url(${backgroundImage})`;
        setLoaded(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loaded, backgroundImage, hasVideo]);

  return (
    <div ref={bgRef} className="game-item__img__top"></div>
  );
};

export default React.memo(GameItemImage);
