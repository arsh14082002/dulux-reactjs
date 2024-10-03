import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initTextRevealAnimation } from '../gsapAnimation/gsapAnimations';

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

const TextReveal = () => {
  useEffect(() => {
    const text = document.querySelector('#fade-in-text');

    // GSAP animation with ScrollTrigger
    initTextRevealAnimation(text);
  }, []);

  return (
    <div className="h-screen flex justify-center items-center lg:px-[100px] px-[20px]">
      <div className="opacity-40 translate-y-[50px]" id="fade-in-text">
        <h2 className="lg:text-[100px] text-[50px] font-bold">Hello, Hover to Change Color!</h2>
        <h2 className="lg:text-[100px] text-[50px] font-bold">More text to hover over!</h2>
      </div>
    </div>
  );
};

export default TextReveal;
