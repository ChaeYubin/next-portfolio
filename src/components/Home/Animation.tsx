"use client";

import Lottie from "react-lottie-player";
import animationData from "../../../public/developer-animation.json";
export default function Animation() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <Lottie
        animationData={animationData}
        className="flex justify-center items-center"
        loop
        play
      />
    </div>
  );
}
