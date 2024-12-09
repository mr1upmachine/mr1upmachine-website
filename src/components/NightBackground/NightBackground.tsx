import { FC, useEffect, useState, CSSProperties } from 'react';
import './NightBackground.css';
import { useEventListener } from '../../hooks/useEventListener';
import { throttle } from '../../utils/throttle';

interface Star {
  id: number;
  top: string; // Position as a percentage (e.g., "50vh")
  left: string; // Position as a percentage (e.g., "50vw")
  size: string; // Size in pixels (e.g., "3px")
  twinkleDelay: string; // Delay for animation (e.g., "2s")
}

function numStarsFromWidth(num: number): number {
  if (num < 768) {
    return 500;
  } else if (num < 1024) {
    return 800;
  } else {
    return 1200;
  }
}

const NightBackground: FC = () => {
  const [numStars, setNumStars] = useState(numStarsFromWidth(window.innerWidth));
  const [stars, setStars] = useState<Star[]>([]);

  useEventListener(
    'resize',
    throttle(() => {
      setNumStars(numStarsFromWidth(window.innerWidth));
    }, 250)
  );

  useEffect(() => {
    const starArray = Array.from({ length: numStars }).map((v, i) => ({
      id: i,
      top: `${Math.random() * 100}vh`, // Random vertical position
      left: `${Math.random() * 100}vw`, // Random horizontal position
      size: `${Math.random() * 3 + 0.1}px`, // Random star size
      twinkleDelay: `${Math.random() * -15}s`, // Random delay for twinkling effect
    }));

    setStars(starArray);
  }, [numStars]);

  return (
    <div
      aria-hidden="true"
      className={`tw-fixed tw-h-full tw-w-full tw-z-[-1] tw-overflow-hidden dark:tw-bg-[black]`}
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="star tw-absolute tw-bg-[black] dark:tw-bg-[white] tw-rounded-full"
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
