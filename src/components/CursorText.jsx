import { useState, useEffect } from 'react';

function CursorText() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleMouseMovement = (e) => {
      setX(e.clientX);
      setY(e.clientY);
    };

    // Add event listener for mouse movement
    document.addEventListener('mousemove', handleMouseMovement);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMovement);
    };
  }, []);

  return (
    <div className="App">
      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>Work</li>
        <li>About</li>
      </ul>

      <CursorPointer x={x} y={y} />
    </div>
  );
}

// Move the CursorPointer component outside the App component
const CursorPointer = ({ x, y }) => {
  return (
    <div
      className="bg-white absolute rounded-full mix-blend-difference w-[32px] h-[32px] translate-y-[-50%] translate-x-[-50%] cursor-none"
      style={{
        left: x,
        top: y,
        position: 'absolute', // Ensure the position is absolute
      }}
    ></div>
  );
};

export default CursorText;
