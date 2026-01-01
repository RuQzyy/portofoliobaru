"use client";

import React, { useRef, useEffect } from "react";
import Spline from "@splinetool/react-spline";

export default function RobotSpline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // optional: focus or any additional logic when mounted
    return () => {
      // cleanup if needed
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
    >
      <Spline scene="https://prod.spline.design/7PeVCwI5dint5bAj/scene.splinecode" />
    </div>
  );
}
