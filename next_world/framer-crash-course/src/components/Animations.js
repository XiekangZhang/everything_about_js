"use client";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function Animations() {
  // Part 1
  const variants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        delayChildren: 5,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  // Part 2
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };
  const [isOpen, setIsOpen] = useState(false);

  // Part 3
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };


  return (
    <>
      <motion.div
        animate={{ x: [null, 100, 0] }}
        transition={{
          ease: "easeOut",
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        initial={{ x: 0 }}
      >
        <h2>Hold me!</h2>
      </motion.div>

      <AnimatePresence>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
        >
          <motion.h2
            style={{
              color: "red",
            }}
          >
            Hold me2!
          </motion.h2>
          <motion.h2
            style={{
              color: "blue",
            }}
          >
            Hold me3!
          </motion.h2>
          <motion.h2
            style={{
              color: "purple",
            }}
          >
            Hold me4!
          </motion.h2>
        </motion.div>
      </AnimatePresence>

      <motion.ul initial="hidden" animate="visible" variants={list}>
        <motion.li variants={item}>Home</motion.li>
        <motion.li variants={item}>Contact</motion.li>
        <motion.li variants={item}>Others</motion.li>
      </motion.ul>

      <motion.nav
        style={{
          filter: "drop-shadow(1px 1px 1px #4700b3)",
          width: "300px",
          background: "gray",
        }}
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
          <motion.div
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
          ></motion.div>
        </motion.button>
        <motion.ul
          variants={{
            open: {
              clipPath: "insert(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: "insert(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          <motion.li variants={itemVariants}>Home</motion.li>
          <motion.li variants={itemVariants}>Contact</motion.li>
          <motion.li variants={itemVariants}>Others</motion.li>
        </motion.ul>
      </motion.nav>

    </>
  );
}
