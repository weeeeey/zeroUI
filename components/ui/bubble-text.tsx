'use client';
import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';

export const BubbleTextLayout = () => {
    return (
        <div className="w-full h-full bg-black flex justify-center items-center">
            <BubbleText />
        </div>
    );
};

const TEXT = 'Bubbbbble text';
const BubbleText = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [left, setLeft] = useState(50);
    const [hoverIdx, setHoverIdx] = useState(-10);

    return (
        <motion.div ref={ref} className="text-4xl elative z-10 bg-red-400">
            {TEXT.split('').map((char, i) => (
                <motion.span
                    key={i}
                    className="inline-block text-indigo-600 "
                    whileHover={{ fontWeight: 900 }}
                    initial={{ fontWeight: 100 }}
                    animate={
                        Math.abs(hoverIdx - i) < 2
                            ? {
                                  fontWeight:
                                      400 * (2 - Math.abs(hoverIdx - i)),
                                  color: 'rgb(201, 208, 238)',
                              }
                            : { fontWeight: 100 }
                    }
                    onHoverStart={() => setHoverIdx(i)}
                    onHoverEnd={() => setHoverIdx(-10)}
                >
                    {char}
                </motion.span>
            ))}
        </motion.div>
    );
};
