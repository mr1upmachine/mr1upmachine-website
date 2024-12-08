import { FC, useEffect, useState, CSSProperties } from 'react';
import './NightBackground.css';

interface Star {
  id: number;
  top: string; // Position as a percentage (e.g., "50vh")
  left: string; // Position as a percentage (e.g., "50vw")
  size: string; // Size in pixels (e.g., "3px")
  twinkleDelay: string; // Delay for animation (e.g., "2s")
}

const NightBackground: FC<{ className?: string }> = ({ className = '' }) => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const numStars = 450; // Number of stars

    const starArray = Array.from({ length: numStars }).map((v, i) => ({
      id: i,
      top: `${Math.random() * 100}vh`, // Random vertical position
      left: `${Math.random() * 100}vw`, // Random horizontal position
      size: `${Math.random() * 3 + 0.1}px`, // Random star size
      twinkleDelay: `${Math.random() * -15}s`, // Random delay for twinkling effect
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
              animationDelay: star.twinkleDelay,
            } as CSSProperties
          }
        ></div>
      ))}
    </div>
  );
};

export default NightBackground;