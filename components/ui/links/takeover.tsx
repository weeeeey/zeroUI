'use client';
import { motion } from 'framer-motion';
import React from 'react';

export const TakeoverLayout = () => {
    return (
        <div className="w-full h-full bg-black  transition-all flex flex-col justify-center items-center space-y-5">
            <Polygon />
            <TakeoverContent text="art" />
            <TakeoverContent text="design" />
            <TakeoverContent text="photos" />
            <TakeoverContent text="contact" />
        </div>
    );
};

const TakeoverContent = ({ text }: { text: string }) => {
    return (
        <motion.div
            whileHover="hover"
            transition={{
                staggerChildren: 1,
            }}
            className="uppercase font-extrabold text-4xl text-white mix-blend-difference overflow-hidden relative"
        >
            {Array.from(text).map((letter, index) => (
                <motion.span
                    variants={{
                        hover: {
                            y: [0, -100],
                            transition: {
                                duration: 1,
                            },
                        },
                    }}
                    key={index}
                    className="inline-block"
                >
                    {letter}
                </motion.span>
            ))}
            {Array.from(text).map((letter, index) => (
                <motion.span
                    variants={{
                        hover: {
                            y: [0, -100],
                            transition: {
                                duration: 1,
                            },
                        },
                    }}
                    key={`${index}2`}
                    className="inline-block absolute top-1/2 left-1/2 translate-y-[100%] -translate-x-1/2"
                >
                    {letter}
                </motion.span>
            ))}
        </motion.div>
    );
};

const POLYGON = { clipPath: `polygon(30% 0, 100% 0, 70% 100%, 0 100%)` };
const Polygon = () => {
    return (
        <div className="h-16 w-32 relative">
            <div style={POLYGON} className="bg-black absolute inset-0">
                <div style={POLYGON} className="bg-white absolute inset-1" />
            </div>
            <div
                style={POLYGON}
                className="bg-black absolute inset-0 -translate-y-1/2 "
            >
                <div style={POLYGON} className="bg-white absolute inset-1" />
            </div>
        </div>
    );
};
