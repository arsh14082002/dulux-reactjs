import React, { useRef, useEffect } from 'react';
import { initCursorAnimation } from '../gsapAnimation/gsapAnimations'; // Adjust the path as needed

const CursorTracker = () => {
  const cursor = useRef();

  useEffect(() => {
    initCursorAnimation(cursor); // Initialize cursor movement
  }, []);

  return (
    <div
      ref={cursor}
      className="fixed top-0 left-0 w-[80px] h-[80px] rounded-full bg-black bg-opacity-90 cursor-none translate-y-[-50%] translate-x-[-50%] z-50 flex justify-center items-center"
    >
      <span className="text-white">Scroll</span>
    </div>
  );
};

export default CursorTracker;
