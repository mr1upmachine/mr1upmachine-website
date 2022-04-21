import { useRef, useEffect } from "react";
import confetti from "canvas-confetti";

import "./ConfettiCanvas.css";
import VolumeSlider from "../VolumeSlider/VolumeSlider";

function ConfettiCanvas() {
  // Confetti
  const canvasElementRef = useRef<HTMLCanvasElement | null>(null);
  const canvasContainerElementRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // Accessibility option for those who have this setting on
    let disableForReducedMotion = false;
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      disableForReducedMotion = true;
    }

    const canvasElement = canvasElementRef.current!;
    const myConfetti = confetti.create(canvasElement, {
      resize: true,
    });

    // start confetti
    const DURATION = 15 * 1000000000000;
    const animationEnd = Date.now() + DURATION;
    let skew = 1;

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    (function frame() {
      const timeLeft = animationEnd - Date.now();
      const ticks = Math.max(200, 500 * (timeLeft / DURATION));
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(
        16
      )}`;
      skew = Math.max(0.8, skew - 0.001);

      myConfetti({
        particleCount: 1,
        startVelocity: 0,
        ticks: ticks,
        origin: {
          x: Math.random(),
          // since particles fall down, skew start toward the top
          y: Math.random() * skew - 0.2,
        },
        colors: [randomColor],
        shapes: ["square"],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.4, 1),
        drift: randomInRange(-0.4, 0.4),
        disableForReducedMotion,
      });

      if (timeLeft > 0) {
        requestAnimationFrame(frame);
      }
    })();

    // List to window resizing and adjust canvas accordingly
    const resizeObserver = new ResizeObserver(([canvasContainerChanges]) => {
      canvasElement.width = canvasContainerChanges.contentRect.width;
      canvasElement.height = canvasContainerChanges.contentRect.height - 5;
    });
    const canvasContainerElement = canvasContainerElementRef.current!;

    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 0);

    resizeObserver.observe(canvasContainerElement);
  });

  return (
    <div
      id="confetti-canvas-container"
      className="confetti-canvas-container"
      ref={canvasContainerElementRef}
    >
      <canvas ref={canvasElementRef}></canvas>
      <VolumeSlider />
    </div>
  );
}

export default ConfettiCanvas;
