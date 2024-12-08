import { FC, useEffect, useState, CSSProperties } from 'react';
import './NightBackground.css';

interface Star {
  id: number;
  top: string; // Position as a percentage (e.g., "50vh")
  left: string; // Position as a percentage (e.g., "50vw")
  size: string; // Size in pixels (e.g., "3px")
  brightness: number; // Brightness (opacity, e.g., 0.2 to 1)
  twinkleDelay: string; // Delay for animation (e.g., "2s")
}

const NightBackground: FC<{ className?: string }> = ({ className = '' }) => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const numStars = 100; // Number of stars

    const starArray = Array.from({ length: numStars }).map((v, i) => ({
      id: i,
      top: `${Math.random() * 100}vh`, // Random vertical position
      left: `${Math.random() * 100}vw`, // Random horizontal position
      size: `${Math.random() * 3 + 1}px`, // Random star size
      brightness: Math.random() * 0.8 + 0.2, // Random brightness between 0.2 and 1
      twinkleDelay: `${Math.random() * -5}s`, // Random delay for twinkling effect
    }));

    setStars(starArray);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`tw-fixed tw-h-full tw-w-full tw-z-[-1] tw-overflow-hidden ${className}`}
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="star tw-absolute tw-bg-[white] tw-rounded-full"
          style={
            {
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              opacity: star.brightness,
              animationDelay: star.twinkleDelay,
            } as CSSProperties
          }
        ></div>
      ))}
    </div>
  );
};

export default NightBackground;
