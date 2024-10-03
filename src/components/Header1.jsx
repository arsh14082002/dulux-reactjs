import React from 'react';
import LogoHeader from '../assets/logo_v.svg';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import videoMP from '../assets/original.mp4';
import { initHeaderAnimations } from '../gsapAnimation/gsapAnimations';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  useGSAP(() => {
    const logoImage = document.getElementById('logoImage');
    const header = document.getElementById('header');
    const blackDiv = document.getElementById('blackDiv');
    const backgroundImage = document.getElementById('backgroundImage'); // Reference for the background image

    initHeaderAnimations(logoImage, header, blackDiv, backgroundImage);
  }, []);

  return (
    <div className="overflow-x-hidden relative">
      {/* Header section */}
      <div className="grid lg:grid-cols-2 grid-cols-1 h-screen z-10" id="header">
        {/* Background Image */}
        <div id="backgroundImage" className="absolute top-0 left-0 w-full h-full">
          <img
            src="https://images.pexels.com/photos/5302905/pexels-photo-5302905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="object-cover w-full h-full"
            alt=""
          />
        </div>
        <div className="lg:block hidden"> </div>
        <div className="flex lg:justify-start items-center justify-center">
          <img src={LogoHeader} alt="Logo" className="w-[300px]" id="logoImage" />
        </div>
      </div>

      {/* Black div behind the header */}
      <div
        className="h-screen absolute top-0 left-0 w-full z-0"
        id="blackDiv"
        style={{ opacity: 0 }} // Start fully hidden
      >
        <video loop autoPlay muted className="w-full h-full object-cover">
          <source src={videoMP} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Header;
