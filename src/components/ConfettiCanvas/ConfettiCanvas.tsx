import { useRef, useEffect } from "react";
import "./ConfettiCanvas.css";
import confetti from "canvas-confetti";
import TostarenaTownMusic from "../../assets/tostarena-town.mp3";

// default values
const DEFAULT_VOLUME = 50; // 0 -> 100

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

  // Audio
  const initialVolume = parseInt(
    localStorage.getItem("volume") ?? DEFAULT_VOLUME.toString(),
    10
  );

  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  const volumeRangeRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const audioElement = audioElementRef.current!;
    const volumeRangeElement = volumeRangeRef.current!;
    const volumeSliderChange = (e: Event) => {
      const parsedValue = parseInt((e.target as HTMLInputElement).value ?? "0");
      audioElement.volume = parsedValue / 100;
      localStorage.setItem("volume", parsedValue.toString());
    };

    // init audio element
    audioElement.volume = initialVolume / 100;
    localStorage.setItem("volume", initialVolume.toString());

    // init volume slider element
    volumeRangeElement.value = initialVolume.toString();
    volumeRangeElement.oninput = volumeSliderChange;
  });

  return (
    <div
      id="confetti-canvas-container"
      className="confetti-canvas-container"
      ref={canvasContainerElementRef}
    >
      <canvas ref={canvasElementRef}></canvas>
      <input
        ref={volumeRangeRef}
        type="range"
        className="party-volume-slider"
        min="0"
        max="100"
        step="1"
      />
      <audio
        ref={audioElementRef}
        preload="auto"
        src={TostarenaTownMusic}
        loop={false}
        autoPlay={true}
      ></audio>
    </div>
  );
}

export default ConfettiCanvas;
