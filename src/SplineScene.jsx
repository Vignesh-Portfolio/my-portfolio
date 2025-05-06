// src/SplineScene.jsx
import React from "react";
import Spline from "@splinetool/react-spline";

export default function SplineScene() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Spline scene="https://prod.spline.design/4h-ANbR9EhzTHSPk/scene.splinecode" />
    </div>
  );
}
