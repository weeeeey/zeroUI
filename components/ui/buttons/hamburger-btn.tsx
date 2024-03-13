'use client';
import { motion } from 'framer-motion';

import React from 'react';

export const HamburgerBtn = ({ onClick }: { onClick: () => void }) => {
    return (
        <motion.button
            onClick={onClick}
            variants={{
                open: {
                    backgroundColor: 'rgb(139, 92, 246)',
                },
                closed: {
                    backgroundColor: 'rgb(0,0,0)',
                },
            }}
            whileHover={{ backgroundColor: 'rgb(139, 92, 246)' }}
            className={`flex flex-col space-y-3 p-4 rounded-full `}
        >
            <motion.div
                variants={{
                    // open: { translateY: '1rem', opacity: 0 },

                    // closed: {},
                    open: {
                        translateY: '1rem',
                        rotate: '-45deg',
                        transition: {
                            rotate: { delay: 0.3, duration: 0.5 },
                        },
                    },
                    closed: {
                        translateY: 0,
                        rotate: 0,
                        transition: {
                            translateY: { delay: 0.3, duration: 0.5 },
                        },
                    },
                }}
                className="w-10 h-1 bg-white rounded-xl "
            />
            <motion.div
                variants={{
                    open: {
                        transition: { delay: 0.3 },
                        rotate: 45,
                    },
                    closed: { rotate: 0, opacity: 1 },
                }}
                className="w-10 h-1 bg-white rounded-xl "
            />

            <motion.div
                variants={{
                    open: { translateY: '-1rem', opacity: 0 },
                    closed: {
                        translateY: '0rem',
                        opacity: 1,
                        transition: { delay: 0.2, duration: 0.5 },
                    },
                }}
                className="w-5 h-1 bg-white rounded-xl self-end"
            />
        </motion.button>
    );
};
