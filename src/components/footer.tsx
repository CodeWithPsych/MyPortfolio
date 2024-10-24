"use client";
import React from "react";
import {
  TextRevealCard
} from "./ui/revaelText";
// import { BackgroundBeams } from "./ui/footerBackground";

export function Footer() {
  return (
    // <div className="h-[40rem] w-full rounded-md bg-gray/[0.56] relative flex flex-col items-center justify-center antialiased">
    <div className="flex flex-col items-center justify-center bg-gray/[0.56] mt-4   w-full">
      <TextRevealCard
        text="You’ve got the vision!"
        revealText="Make it come true"
      />
      <div className="-mt-[23px] mb-7">All rights reserved © CodeWithPsych 2024 </div>

    </div>
  );
}

