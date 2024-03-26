"use client";
import {motion} from "framer-motion";

export default function BasicsOfMotion() {
    return (
        <div
            style={{
                display: "grid",
                placeContent: "center",
                height: "100vh",
                gap: "0.8rem"
            }}
        >
            <button className="example-button">Show/Hide</button>
            <motion.div
                initial={{
                    rotate: "0deg"
                }}
                animate={{
                    rotate: "180deg"
                }}
                exit={{
                    rotate: "0deg"
                }}
                transition={{
                    duration: 1,
                    ease: "backInOut"
                }}
                style={{
                    width: 150,
                    height: 150,
                    background: "white",
                }}>

            </motion.div>
        </div>
    )
}