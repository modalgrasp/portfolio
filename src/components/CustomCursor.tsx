'use client';

import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isOverName, setIsOverName] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const handleNameEnter = () => setIsOverName(true);
    const handleNameLeave = () => setIsOverName(false);

    window.addEventListener('mousemove', updatePosition);
    
    // Add event listeners for interactive elements
    document.querySelectorAll('a, button').forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    // Add event listeners for name element
    const nameElement = document.querySelector('.name-text');
    if (nameElement) {
      nameElement.addEventListener('mouseenter', handleNameEnter);
      nameElement.addEventListener('mouseleave', handleNameLeave);
    }

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.querySelectorAll('a, button').forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
      if (nameElement) {
        nameElement.removeEventListener('mouseenter', handleNameEnter);
        nameElement.removeEventListener('mouseleave', handleNameLeave);
      }
    };
  }, []);

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${isOverName ? 1.5 : 1})`,
          backgroundColor: isOverName ? '#9333ea' : '#9333ea',
          boxShadow: isOverName ? '0 0 10px #9333ea' : 'none',
        }}
      />
      <div
        className="cursor-outline"
        style={{
          transform: `translate(${position.x - 15}px, ${position.y - 15}px) scale(${isHovering ? 1.5 : isOverName ? 2 : 1})`,
          backgroundColor: isHovering ? 'rgba(147, 51, 234, 0.1)' : isOverName ? 'rgba(147, 51, 234, 0.2)' : 'transparent',
          borderColor: isOverName ? '#9333ea' : '#9333ea',
          borderWidth: isOverName ? '3px' : '2px',
        }}
      />
    </>
  );
};

export default CustomCursor; 