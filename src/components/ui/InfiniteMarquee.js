"use client";

import { useEffect, useRef } from "react";

export function InfiniteMarquee({ children, pixelsPerSecond = 45, className = "" }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let offset = 0;
    let lastTime = null;
    let raf;

    const start = () => {
      // Measure how far to scroll before looping. child 12 is the first logo
      // of the second set. We measure its position relative to the track using
      // getBoundingClientRect so transforms and offsetParent don't interfere.
      const trackLeft = track.getBoundingClientRect().left;
      const child = track.children[12];
      const resetAt = child
        ? child.getBoundingClientRect().left - trackLeft
        : track.scrollWidth / 4;

      if (resetAt <= 0) return; // bail if layout hasn't settled

      const tick = (time) => {
        if (lastTime !== null) {
          const delta = (time - lastTime) / 1000;
          offset -= pixelsPerSecond * delta;
          if (-offset >= resetAt) {
            offset += resetAt;
          }
          track.style.transform = `translateX(${offset}px)`;
        }
        lastTime = time;
        raf = requestAnimationFrame(tick);
      };

      raf = requestAnimationFrame(tick);
    };

    if (document.readyState === "complete") {
      start();
    } else {
      window.addEventListener("load", start, { once: true });
    }

    return () => {
      window.removeEventListener("load", start);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pixelsPerSecond]);

  return (
    <div
      ref={trackRef}
      className={`flex w-max items-center gap-x-14 ${className}`}
      style={{ willChange: "transform" }}
    >
      {children}
    </div>
  );
}
