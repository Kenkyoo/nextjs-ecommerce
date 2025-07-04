"use client";

import { motion } from "motion/react";
import Buttons from "./buttons";
import { Meteors } from "@/components/magicui/meteors";

const Heading = () => {
  return (
    <>
      <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
        {"Ecommerce app with Nextjs".split(" ").map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            className="mr-2 inline-block"
          >
            {word}
          </motion.span>
        ))}
      </h1>
      <Meteors number={30} />
      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          delay: 0.8,
        }}
        className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
      >
        With Ecommerce, you can buy your products. Try our best in class, state
        of the art, tablets, laptops and more, to get the best products up.
      </motion.p>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          delay: 1,
        }}
        className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
      >
        <Buttons />
      </motion.div>
    </>
  );
};

export default Heading;
