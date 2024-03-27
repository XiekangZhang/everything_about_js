"use client";
import {motion, MotionConfig} from "framer-motion";

export default function Gestures() {
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
                    style={{
                        backgroundColor: "red",
                    }}
                >Click me!
                </motion.button>
            </MotionConfig>
        </div>
    )
}