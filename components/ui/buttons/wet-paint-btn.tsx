'use client';
import { motion } from 'framer-motion';
import React from 'react';

export const WetPaintBtn = () => {
    return (
        <button className="bg-indigo-500 relative rounded-xl px-4 py-3 hover:bg-indigo-600 transition-all ">
            <div className="text-white/90 font-bold">Wet Paint Button</div>
            <div className="absolute bottom-0 translate-y-[90%] left-0 flex justify-between items-start w-full px-4 ">
                <motion.div
                    animate={{
                        scaleY: 1.5,
                        transition: {
                            duration: 1,
                            delay: 0.8,
                            repeat: Infinity,
                        },
                    }}
                    className="rounded-md bg-indigo-500 h-7 w-3"
                >
                    <motion.div
                        animate={{
                            translateY: '3rem',
                            opacity: 0,
                            transition: {
                                duration: 2,
                                delay: 0.8,
                                repeat: Infinity,
                            },
                        }}
                        className="w-3 h-3 absolute rounded-full bg-indigo-500"
                    />
                </motion.div>
                <motion.div
                    animate={{
                        scaleY: 1.5,
                        transition: {
                            duration: 1,
                            delay: 1,
                            repeat: Infinity,
                        },
                    }}
                    className="rounded-md bg-indigo-500 h-5 w-3"
                >
                    <motion.div
                        animate={{
                            translateY: '3rem',
                            opacity: 0,
                            transition: {
                                duration: 2,
                                delay: 1,
                                repeat: Infinity,
                            },
                        }}
                        className="w-3 h-3 absolute rounded-full bg-indigo-500"
                    />
                </motion.div>
                <motion.div
                    animate={{
                        scaleY: 1.5,
                        transition: {
                            duration: 1,
                            delay: 1.2,
                            repeat: Infinity,
                        },
                    }}
                    className="rounded-md bg-indigo-500 h-4 w-3"
                >
                    <motion.div
                        animate={{
                            translateY: '3rem',
                            opacity: 0,
                            transition: {
                                duration: 2,
                                delay: 1.2,
                                repeat: Infinity,
                            },
                        }}
                        className="w-3 h-3 absolute rounded-full bg-indigo-500"
                    />
                </motion.div>
                <motion.div
                    animate={{
                        scaleY: 1.5,
                        transition: {
                            duration: 1,
                            delay: 0.9,
                            repeat: Infinity,
                        },
                    }}
                    className="rounded-md bg-indigo-500 h-6 w-3"
                >
                    <motion.div
                        animate={{
                            translateY: '3rem',
                            opacity: 0,
                            transition: {
                                duration: 2,
                                delay: 0.9,
                                repeat: Infinity,
                            },
                        }}
                        className="w-3 h-3 absolute rounded-full bg-indigo-500"
                    />
                </motion.div>
            </div>
        </button>
    );
};
