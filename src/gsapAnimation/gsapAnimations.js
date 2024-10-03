import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initHeaderAnimations = (logoImage, header, blackDiv, backgroundImage) => {
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
        trigger: header,
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
};

export const initCursorAnimation = (cursor) => {
  // Track cursor movement and apply animation
  window.addEventListener('mousemove', (e) => {
    gsap.to(cursor.current, {
      x: e.clientX,
      y: e.clientY,
      ease: 'back.out(1.7)',
    });
  });
};

export const initTextRevealAnimation = (text) => {
  gsap.fromTo(
    text,
    { opacity: 0, y: 50 }, // Initial state (hidden, moved down)
    {
      opacity: 1, // Final state (visible)
      y: 0, // Moves back to the original position
      duration: 1, // Animation duration in seconds
      ease: 'power3.out', // Easing function
      scrollTrigger: {
        trigger: '#fade-in-text', // Element to trigger animation
        start: 'top 80%', // When the top of the element is 80% down the viewport
        end: 'bottom 20%', // When the bottom of the element is 20% from the top of the viewport
        toggleActions: 'play none none none', // Animation plays once on scroll
        scrub: true,
        markers: true, // Display markers for debugging (remove in production)
      },
    },
  );
};
