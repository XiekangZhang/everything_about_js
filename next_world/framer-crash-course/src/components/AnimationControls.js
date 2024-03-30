"use client";
import { motion, useAnimationControls } from "framer-motion";

export default function AnimationControls() {
  const flipControls = useAnimationControls();
  const handleClick = () => {
    // Do something here
    flipControls.start("flip");
  };

  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <motion.button className="example-button" onClick={handleClick}>
        Flip it!
      </motion.button>
      <motion.div
        style={{
          width: 150,
          height: 150,
          background: "white",
        }}
        variants={{
          initial: { rotate: 0 },
          flip: { rotate: 360 },
        }}
        //whileHover="flip"
        initial="initial"
        animate={flipControls}
      ></motion.div>
    </div>
  );
}
