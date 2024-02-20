import React from "react";
import { motion } from "framer-motion";

const LandingImage = () => {
  const pathStrokeVariant = {
    hidden: {
      pathLength: 0,
    },

    visible: {
      pathLength: 1,
      // rotate: 360,

      transition: {
        duration: 4,
        ease: "easeInOut",
      },
    },
  };

  const pulseAni = () => {
    const delay = Math.random() * 10; // Generate a random delay between 0 and 10 for each path
    const repeatDelay = Math.random() * 5; // Generate a random repeat delay between 0 and 5 for each path

    const pulse = {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,

        transition: {
          delay: delay, // Use the generated delay
          duration: 1,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: repeatDelay, // Use the generated repeat delay
        },
      },
    };
    return pulse;
  };

  return (
    <motion.svg
      width={500}
      height={500}
      viewBox="0 0 1199 1200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      initial="hidden"
      animate="visible"
      className="w-[280px] lg:w-auto"
    >
      <motion.path
        d="M174.487 433.33L600 187.66L1025.51 433.33V924.67L600 1170.34L174.487 924.67V433.33Z"
        stroke="#259FB7"
        strokeWidth={15}
        variants={pathStrokeVariant}
      />
      <motion.path
        d="M208.487 454.33L634 208.66L1059.51 454.33V945.67L634 1191.34L208.487 945.67V454.33Z"
        stroke="#80D8FF"
        strokeWidth={15}
        variants={pathStrokeVariant}
      />
      <motion.path
        d="M1029 279L1158.9 354V504L1029 579L899.096 504V354L1029 279Z"
        fill="#80D8FF"
        fillOpacity="0.8"
        variants={pulseAni()}
      />
      <motion.path
        d="M200 700L286.603 750V850L200 900L113.397 850V750L200 700Z"
        fill="#259FB7"
        fillOpacity="0.8"
        variants={pulseAni()}
      />
      <motion.path
        d="M238 905L302.952 942.5V1017.5L238 1055L173.048 1017.5V942.5L238 905Z"
        fill="#80D1FF"
        fillOpacity="0.8"
        variants={pulseAni()}
      />
      <motion.path
        d="M100 880L143.301 905V955L100 980L56.6987 955V905L100 880Z"
        fill="#259FB7"
        variants={pulseAni()}
      />
      <motion.path
        d="M50 780L93.3013 805V855L50 880L6.69873 855V805L50 780Z"
        fill="#80D8FF"
        variants={pulseAni()}
      />
      <motion.path
        d="M900 179L964.952 216.5V291.5L900 329L835.048 291.5V216.5L900 179Z"
        fill="#259FB7"
        variants={pulseAni()}
      />
      <motion.path
        d="M1139 557L1190.96 587V647L1139 677L1087.04 647V587L1139 557Z"
        fill="#259FB7"
        fillOpacity="0.8"
        variants={pulseAni()}
      />
      <motion.path
        d="M950 557L993.301 582V632L950 657L906.699 632V582L950 557Z"
        fill="#80D8FF"
        variants={pulseAni()}
      />
      <motion.path
        d="M634 450L850.506 575V825L634 950L417.494 825V575L634 450Z"
        fill="#80D8FF"
      />
      <motion.path
        d="M884 529L905.651 541.5V566.5L884 579L862.349 566.5V541.5L884 529Z"
        fill="#259FB7"
        variants={pulseAni()}
      />
      <rect x={50} width="1141.14" height={1200} fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#image0_13_54"
            transform="matrix(0.000303575 0 0 0.000288684 -0.0257919 0)"
          />
        </pattern>
        <image
          id="image0_13_54"
          width={3464}
          height={3464}
        />
      </defs>
    </motion.svg>
  );
};

export default LandingImage;