"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export default function ViewBasedAnimations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log("Is in view -> ", isInView);
  }, [isInView]);

  return (
    <>
      <div
        style={{
          height: "150vh",
        }}
      ></div>
      <motion.div
        style={{
          height: "100vh",
          background: "white",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
      <div
        ref={ref}
        style={{
          height: "100vh",
          background: isInView ? "blue" : "red",
          transition: "1s background",
        }}
      ></div>
    </>
  );
}
