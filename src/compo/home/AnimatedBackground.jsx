import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import './styles.css';

export default function AnimatedBubbles() {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // Create 20 random bubbles
    const newBubbles = Array.from({ length: 24 }).map((_, index) => ({
      id: index,
      left: Math.random() * 100, // % from left
      size: Math.random() * 40 + 20, // px
      delay: Math.random() * 5, // seconds
      duration: Math.random() * 10 + 5, // seconds
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <Box className="bubble-container">
      {bubbles.map((bubble) => (
        <span
          key={bubble.id}
          className="bubble"
          style={{
            left: `${bubble.left}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`
          }}
        />
      ))}
    </Box>
  );
}
