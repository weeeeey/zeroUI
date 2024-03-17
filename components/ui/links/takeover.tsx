'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect } from 'react';

export const TakeoverLayout = () => {
    return (
        <div className="w-full h-full bg-black  transition-all flex flex-col justify-center items-center  relative">
            <Polygon />
            <TakeoverContent text="art" />
            <TakeoverContent text="design" />
            <TakeoverContent text="photos" />
            <TakeoverContent text="contact" />
        </div>
    );
};

const TakeoverContent = ({ text }: { text: string }) => {
    const [isHover, setIsHover] = React.useState(false);
    const handleHover = (bool: boolean) => {
        setIsHover(bool);
    };

    return (
        <motion.div animate={isHover ? 'hover' : ''}>
            {/* <TakeoverBackground imgSrc="/images/hero.jpg" /> */}

            <TakeoverLink text={text} handleHover={handleHover} />
        </motion.div>
    );
};

const TakeoverBackground = ({ imgSrc }: { imgSrc: string }) => {
    return (
        <motion.div className="absolute inset-0 bg-red-300 w-full h-full"></motion.div>
    );
};

const TakeoverLink = ({
    text,
    handleHover,
}: {
    text: string;
    handleHover: (bool: boolean) => void;
}) => {
    return (
        <motion.div
            onHoverStart={() => handleHover(true)}
            onHoverEnd={() => handleHover(false)}
            whileHover="hover"
            transition={{
                staggerChildren: 0.2,
            }}
            className="uppercase font-extrabold text-4xl text-white mix-blend-difference overflow-hidden relative my-3 cursor-pointer z-20"
        >
            <motion.div>
                {Array.from(text).map((letter, index) => (
                    <motion.span
                        variants={{
                            hover: {
                                translateY: '-100%',
                                transitionDuration: '0.5',
                            },
                        }}
                        key={index}
                        className="inline-block"
                    >
                        {letter}
                    </motion.span>
                ))}
            </motion.div>
            <motion.div className="absolute top-0 left-1/2 translate-y-[100%] -translate-x-1/2 w-full">
                {Array.from(text).map((letter, index) => (
                    <motion.span
                        // initial={{ translateY: 0 }}
                        variants={{
                            hover: {
                                translateY: '-100%',
                            },
                        }}
                        key={`${index}2`}
                        className="inline-block "
                    >
                        {letter}
                    </motion.span>
                ))}
            </motion.div>
        </motion.div>
    );
};

const POLYGON = { clipPath: `polygon(30% 0, 100% 0, 70% 100%, 0 100%)` };
const Polygon = () => {
    return (
        <div className="h-16 w-32 relative z-20">
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
