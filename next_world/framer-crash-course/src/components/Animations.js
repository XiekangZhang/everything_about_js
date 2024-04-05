"use client";
import {AnimatePresence, motion} from 'framer-motion';

export default function Animations() {
    const variants = {
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                delayChildren: 5
            }
        },
        hidden: {
            opacity: 0,
            transition: {
                when: "afterChildren",
            }
        }
    }
    return (
        <>
            <motion.div
                animate={{x: [null, 100, 0]}}
                transition={{ease: "easeOut", duration: 2}}
                initial={{x: 0}}
            >
                <h2>Hold me!</h2>
            </motion.div>

            <AnimatePresence>
                <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    exit={{opacity: 0}}
                >
                    <motion.h2
                        style={{
                            color: "red"
                        }}
                    >Hold me2!
                    </motion.h2>
                    <motion.h2
                        style={{
                            color: "blue"
                        }}
                    >Hold me3!
                    </motion.h2>
                    <motion.h2
                        style={{
                            color: "purple"
                        }}
                    >Hold me4!
                    </motion.h2>
                </motion.div>
            </AnimatePresence>

        </>
    )
}