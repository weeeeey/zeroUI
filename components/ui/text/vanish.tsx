'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const TEXT = ['Fortune 500', 'Indie Hackers', 'Marketing', 'YC Startups'];

export const VanishLayout = () => {
    return (
        <div className="w-full h-full flex justify-center items-center bg-violet-500">
            <Vanish />
        </div>
    );
};

const Vanish = () => {
    const [selectedId, setSelectedId] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setSelectedId((p) => (p + 1) % TEXT.length);
    //     }, 4000);
    //     return () => clearInterval(interval);
    // }, []);

    useEffect(() => {
        console.log(selectedId);
    }, [selectedId]);

    return (
        <div className="text-white text-4xl">
            <div className="text-white/85">We build websites for</div>

            <motion.div
                transition={{
                    delayChildren: 3,
                    staggerChildren: 4,
                }}
            >
                <AnimatePresence mode="popLayout">
                    {TEXT[selectedId].split('').map((char, idx) => (
                        <motion.span
                            className="inline-block"
                            key={`${char}-${idx}`}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            transition={{
                                staggerChildren: 1,
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};
