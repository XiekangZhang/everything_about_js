"use client";
import {motion, MotionConfig, useMotionValue, useTransform} from "framer-motion";

export default function Gestures() {
    const x = useMotionValue(0);
    const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])
    return (
        <div
            style={{
                display: "grid",
                placeContent: "center",
                gap: "0.8rem",
                height: "100vh"
            }}>
            <MotionConfig transition={{duration: 0.125, ease: "easeInOut"}}
            >
                <motion.button
                    className="example-button"
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95, rotate: "2.5deg"}}
                >Click me!
                </motion.button>
                <motion.button
                    className="example-button"
                    whileHover={{scale: 1.15}}
                    whileTap={{scale: 0.85, rotate: "-2.5deg"}}
                    drag={true}
                    dragConstraints={{left: -100, right: 100, top: -100, bottom: 100}}
                    style={{
                        backgroundColor: "red",
                    }}
                >Click me!
                </motion.button>
                <motion.button
                    className="example-button"
                    drag="x"
                    style={{
                        backgroundColor: "purple",
                        x,
                        opacity
                    }}
                >Click me!
                </motion.button>
            </MotionConfig>
            <motion.div
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 360, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1
                }}
            >
                <h1>hold me!</h1>
            </motion.div>
        </div>
    )
}