import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';

const ImageReveal = () => {
  useGSAP(() => {
    gsap.to('image-reveal', {});
  }, []);
  return (
    <div className="h-[100vh]">
      <section className="header">
        <h1>Widen Image On Enter</h1>
      </section>
      <section className="bg-[#f2f2f2] relative flex justify-center items-center">
        <div className="w-full">
          <img
            id="grow"
            src="https://images.pexels.com/photos/26146558/pexels-photo-26146558/free-photo-of-people-hiking-on-dirt-road-under-fog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="object-cover w-full"
          />
        </div>
        <h1 id="grow-tagline" className="tagline trany">
          At Vero Eos
        </h1>
      </section>
    </div>
  );
};

export default ImageReveal;
