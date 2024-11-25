"use client";

import Background from "@/components/Background";
import MotionDiv from "@/components/MotionDiv";
import mobile from "@/app/assets/home/background-home-mobile.jpg";
import tablet from "@/app/assets/home/background-home-tablet.jpg";
import desktop from "@/app/assets/home/background-home-desktop.jpg";
import { motion } from "framer-motion";
import { SLIDE_LEFT } from "@/lib/data";
export default function Home() {
  return (
    <MotionDiv>
      <Background
        mobile={mobile.src}
        tablet={tablet.src}
        desktop={desktop.src}
      />

      <main className="relative z-10 min-h-[80vh] flex flex-col justify-evenly items-center lg:flex-row lg:items-end lg:justify-between lg:p-32">
        <motion.div
          variants={SLIDE_LEFT}
          className="font-primary text-secondary text-center px-4 md:max-w-lg md:mx-auto lg:mx-0 lg:text-left"
        >
          <span className="nav-text text-lg uppercase lg:-translate-x-8 lg:text-3xl">
            SO,YOU WANT TO TRAVEL TO
          </span>
          <h1 className="text-white my-6 uppercase font-primary">SPACE</h1>
          <p>{`Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!`}</p>
        </motion.div>

        <motion.div
          variants={SLIDE_LEFT}
          className="bg-white w-48 h-48 rounded-full flex items-center justify-center font-primary tracking-[1.25px] uppercase relative group md:w-60 md:h-60 lg:w-72 lg:h-72"
        >
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-white/10 rounded-full scale-50 transition ease-in-out duration-[700ms!important] cursor-pointer group-hover:scale-100" />
          <span className="relative hover:cursor-pointer z-10 text-primary text-lg md:text-3xl">
            explore
          </span>
        </motion.div>
      </main>
    </MotionDiv>
  );
}
