import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import videoMP from '../assets/original.mp4';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ImageGrow = () => {
  useGSAP(() => {
    const growTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#grow',
        scrub: 1.5,
        start: 'top 50%',
        end: 'bottom 100%',
        ease: 'power1.inOut',
        pin: true,
        // markers: true,
      },
    });
    growTl.fromTo(
      '#grow',
      {
        scale: 0.5,
        // y: '70%',
        zIndex: 1999,
      },
      {
        duration: 1,
        scale: 1,
        // y: '0%',
      },
    );
    growTl.to('#grow-tagline', {
      duration: 0.4,
      //   delay: -0.7,
      y: 0,
    });
  });

  return (
    <div>
      <section
        id="grow-section"
        className="bg-[url('https://images.pexels.com/photos/396547/pexels-photo-396547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] relative flex flex-col justify-center items-center"
      >
        <div className="w-full">
          <video
            id="grow"
            className=" object-cover h-screen w-full"
            src={videoMP}
            alt="Hiking"
          ></video>
        </div>
        <h1
          id="grow-tagline"
          className="text-[100px] font-bold tracking-widest uppercase absolute top-0 text-white"
        >
          At Vero Eos
        </h1>
      </section>
    </div>
  );
};

export default ImageGrow;
