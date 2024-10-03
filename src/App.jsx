import React, { useEffect } from 'react';
import Header1 from './components/Header1';
import Lenis from 'lenis';
import CursorTracker from './components/CursorTracker';
import TextReveal from './components/TextReveal';
import CursorText from './components/CursorText';
import ImageReveal from './components/ImageReveal';
import VideoReveal from './components/VideoReveal';

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div>
      <CursorTracker />
      <Header1 />
      <TextReveal />
      <VideoReveal />
      <ImageReveal />
      {/* <ImageReveal /> */}
      {/* <CursorText /> */}
    </div>
  );
};

export default App;
