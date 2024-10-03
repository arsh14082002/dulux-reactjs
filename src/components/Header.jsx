import React from 'react';
import LogoHeader from '../assets/logo_v.svg';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import videoMP from '../assets/original.mp4';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  useGSAP(() => {
    const logoImage = document.getElementById('logoImage');
    const header = document.getElementById('header');
    const blackDiv = document.getElementById('blackDiv');
    const backgroundImage = document.getElementById('backgroundImage'); // Reference for the background image

    gsap.fromTo(
      logoImage,
      {
        scale: 1,
        opacity: 1, // Start fully visible
      },
      {
        scale: `${window.innerWidth - 300}`,
        opacity: 0, // Fade out the logo
        duration: 4,
        ease: 'power2.inOut',
        delay: 0.5,
        scrollTrigger: {
          trigger: '#header',
          start: 'top top',
          end: 'bottom top',
          scrub: 2,
          pin: true,
          onUpdate: (self) => {
            const progress = self.progress;

            // Fade out the background image before the logo fades out
            if (progress < 0.5) {
              // Fade out the background image
              backgroundImage.style.opacity = 1 - progress * 2; // Fully invisible at progress 0.5
              logoImage.style.opacity = 1; // Logo remains fully visible until background is faded
            } else {
              // Fade out the logo after the background has faded out
              logoImage.style.opacity = 1 - (progress - 0.5) * 2; // Fade out logo
            }
          },
          onLeave: () => {
            header.style.display = 'none'; // Hide the header on scroll end
            blackDiv.style.opacity = 1; // Ensure the black div is fully visible
          },
          onLeaveBack: () => {
            header.style.display = 'grid'; // Show the header when scrolling back up
            blackDiv.style.opacity = 0; // Hide the black div when scrolling back
            backgroundImage.style.opacity = 1; // Reset background opacity
            logoImage.style.opacity = 1; // Reset logo opacity
          },
        },
      },
    );

    // Add an animation to pin and scale the black div (optional)
    gsap.to(blackDiv, {
      scale: 1,
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: blackDiv,
        start: 'top top',
        end: 'bottom top',
        scrub: 4,
        pin: true,
        // markers: true,
      },
    });
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

      {/* Additional content to scroll */}
      <div className="h-screen">
        <h2>Heder</h2>
      </div>
    </div>
  );
};

export default Header;
