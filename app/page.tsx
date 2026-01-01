"use client";

import { useState } from "react";
import Aurora from "@/components/Aurora";
import ShinyText from "@/components/ShinyText";
import BlurText from "@/components/BlurText";
import SplashCursor from "@/components/SplashCursor";
import StarBorder from "@/components/StarBorder";
import SpotlightCard from "@/components/SpotlightCard";
import dynamic from "next/dynamic";
import CountUp from "@/components/CountUp"
import GradientText from "@/components/GradientText";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


const Lanyard = dynamic(() => import("@/components/Lanyard"), {
  ssr: false,
});




const ProfileCard = require("@/components/ProfileCard.jsx").default;

export default function Home() {
  const [blurKey, setBlurKey] = useState(0);
  // About section animation
const controls = useAnimation();
const [ref, inView] = useInView({ threshold: 0.2 });

useEffect(() => {
  if (inView) controls.start("visible");
}, [controls, inView]);

const lanyardVariants = {
  hidden: { y: -200, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 12 },
  },
};


  return (
    <main className="relative">

      {/* ================= HERO ONLY ================= */}
      <section className="relative min-h-screen overflow-hidden">


        {/* Aurora Background — HERO ONLY */}
        <div className="absolute inset-0 -z-10">
          <Aurora
            colorStops={[
              '#0e4a45', 
              '#217d75', 
              '#2e8f78'  
            ]}
            amplitude={1.1}
            blend={0.3}
          />
        </div>
        
        <div className="min-h-screen flex items-center px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl mx-auto">

            {/* LEFT */}
            <div className="flex flex-col justify-center text-white">
              <span className="mb-4 inline-block w-fit rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                “Avoid or just undertake it”
              </span>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                <ShinyText
                  text="Hallo Saya Muhammad Al-Faruq"
                  className="shiny-inline"
                  speed={3}
                />
              </h1>

              <BlurText
                key={blurKey}
                text="Saya adalah mahasiswa yang berfokus pada pengembangan web, berperan sebagai Web Developer dan Full Stack Developer. Berpengalaman membangun website modern dan responsif, serta membuka jasa pembuatan website profesional untuk kebutuhan personal, bisnis, maupun institusi."
                className="mt-4 max-w-xl text-white leading-relaxed"
                animateBy="words"
                direction="top"
                delay={150}
                animationFrom={{ filter: "blur(10px)", opacity: 0 }}
                animationTo={[{ filter: "blur(0px)", opacity: 1 }]}
                onAnimationComplete={() => {
                  setTimeout(() => setBlurKey(k => k + 1), 2000);
                }}
              />

              <div className="mt-8 flex gap-4">
               <StarBorder
                  as="button"
                  className="custom-class"
                  color="cyan"
                  speed="4s"
                >
                    <ShinyText
                  text="Download CV"
                  className="shiny-inline"
                  speed={3}
                />
                </StarBorder>

                <StarBorder
                  as="button"
                  className="custom-class"
                  color="cyan"
                  speed="4s"
                >
                     <ShinyText
                  text="Explore My Project"
                  className="shiny-inline"
                  speed={3}
                />
                </StarBorder>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex justify-center md:justify-end">
              <div className="scale-[0.8] md:scale-[0.75] origin-center">
                <ProfileCard
                  avatarUrl="/c.jpeg"
                  miniAvatarUrl="/c.jpeg"
                  name="Muhammad Al-Faruq"
                  title="Web Developer"
                  handle="_alfaruq._"
                  status="Mahasiswa"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* ============== END HERO ================= */}

 <section ref={ref} className="min-h-screen bg-black px-4 md:px-8 pt-5 pb-24 flex justify-center">
  <SpotlightCard className="w-full max-w-4xl">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      
      {/* LEFT — LANYARD */}
          <div className="flex justify-center">
            {inView && <Lanyard />}
          </div>

      {/* RIGHT — ABOUT CONTENT */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Tentang <span className="text-[#2e8f78]">Saya</span>
        </h2>

        <p className="text-neutral-400 leading-relaxed mb-4">
          Saya adalah mahasiswa Sistem Informasi di ITB Stikom Ambon dan saat ini aktif sebagai Freelance Web Developer.  
          Dengan pengalaman praktis di dunia pengembangan web, saya terbiasa membangun solusi digital yang efektif dan estetis.
        </p>

        <p className="text-neutral-400 leading-relaxed">
          Selain itu, saya memiliki pengalaman mengajar mata pelajaran Website di SMK Muhammadiyah Ambon.  
          Pengalaman ini memperkuat kemampuan saya dalam komunikasi, mentoring, dan menyampaikan konsep teknis secara jelas.
        </p>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-6 mt-8">
          <div>
            <h3 className="text-3xl font-bold">
              <GradientText colors={["#2e8f78","#81e6d9"]} animationSpeed={3} showBorder={false}>
                <CountUp from={0} to={2} duration={2} className="inline-block" />+
              </GradientText>
            </h3>
            <p className="text-sm text-neutral-500">Tahun Freelance</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">
              <GradientText colors={["#2e8f78","#81e6d9"]} animationSpeed={3} showBorder={false}>
                <CountUp from={0} to={15} duration={2} className="inline-block" />+
              </GradientText>
            </h3>
            <p className="text-sm text-neutral-500">Proyek Web Selesai</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">
              <GradientText colors={["#2e8f78","#81e6d9"]} animationSpeed={3} showBorder={false}>
                <CountUp from={0} to={1} duration={2} className="inline-block" />+
              </GradientText>
            </h3>
            <p className="text-sm text-neutral-500">Sekolah Mengajar</p>
          </div>
        </div>

        {/* BUTTON */}
        <button className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2e8f78] hover:bg-[#276d63] transition text-white">
          Unduh CV
        </button>
      </div>
    </div>
  </SpotlightCard>
</section>
    </main>
  );
}
