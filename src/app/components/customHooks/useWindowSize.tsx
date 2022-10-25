import React, { useEffect, useState } from "react";

type Props = {
  width: number | undefined;
  height: number | undefined;
};

const BREAK_SCREEN = {
  MOBILE: 768,
  BIG_SCREEN: 1280,
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<Props>({
    width: undefined,
    height: undefined,
  });

  const [isMobile, setIsMobile] = useState(false);
  const [isNomalScreen, setIsNomalScreen] = useState(false);
  const [isBigScreen, setIsBigScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      if (window.innerWidth < BREAK_SCREEN.MOBILE) {
        setIsMobile(true);
        setIsNomalScreen(false);
        setIsBigScreen(false);
      }else if (window.innerWidth > BREAK_SCREEN.MOBILE && window.innerWidth < BREAK_SCREEN.BIG_SCREEN) {
        setIsMobile(false);
        setIsNomalScreen(true);
        setIsBigScreen(false);
      } else {
        setIsMobile(false);
        setIsNomalScreen(false);
        setIsBigScreen(true);
      }
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return { windowSize, isMobile, isNomalScreen, isBigScreen };
};

export default useWindowSize;
