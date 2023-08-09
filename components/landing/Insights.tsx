import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import logo from '../../public/images/landing/logo.svg'
import insightsImg from '../../public/images/features/insights.svg'
import medicationImg from '../../public/images/features/medication.svg'
import journalingImg from '../../public/images/features/journaling.svg'

const Insights: React.FC = () => {
  return (
    <div className="w-full lg:flex items-center h-full lg:h-screen align-middle mb-2 px-8 xl:px-16 mx-auto">
      <div className="w-full lg:hidden block pt-24">
        <motion.div className="h-full w-full flex justify-center">
          <Image
              className="relative"
              src={logo}
              alt="Adot Logo"
              width={150}
              height={18}
              priority
              />
        </motion.div>
      </div>
          <motion.div
            className="gap-12 py-16 flex justify-between w-full">
              <motion.div 
              className="h-full flex justify-center col-span-1"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 2,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              >
                <Image
                  className="relative"
                  src={insightsImg}
                  alt="Next.js Logo"
                  width={300}
                  height={37}
                  priority
                  />
              </motion.div>
              <motion.div 
              className="h-full flex justify-centercol-span-1"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 2,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              >
                <Image
                  className="relative"
                  src={medicationImg}
                  alt="Next.js Logo"
                  width={300}
                  height={37}
                  priority
                  />
              </motion.div>
              <motion.div 
              className="h-full flex justify-center col-span-1"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 2,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              >
                <Image
                  className="relative"
                  src={journalingImg}
                  alt="Next.js Logo"
                  width={300}
                  height={37}
                  priority
                  />
              </motion.div>
              
          </motion.div>
    </div>
  );
};

export default Insights;
