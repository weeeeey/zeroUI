import Image from 'next/image';
import React from 'react';
import { DUMMY_TEXT } from '.';

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const ColorChageLayout = () => {
    return (
        <div className="w-full h-full bg-white/80 p-10 flex flex-col space-y-10">
            <ColorChange decription={DUMMY_TEXT} title="Connect" imgSrc="3" />
        </div>
    );
};

interface ColorChangeProps {
    title: string;
    decription: string;
    imgSrc: string;
}
export const ColorChange = ({
    decription,
    title,
    imgSrc,
}: ColorChangeProps) => {
    return (
        <motion.div
            whileHover="hover"
            className="cursor-pointer w-full h-[30%] relative flex flex-col justify-end p-4 group "
        >
            <ArrowRight className="absolute z-10 top-5 right-5 w-7 h-7 group-hover:rotate-[-30deg] transition-all duration-500 text-slate-300" />
            <motion.div className="relative  z-10 ">
                <motion.div className="text-white font-bold text-xl ">
                    {Array.from(title).map((letter, index) => (
                        <motion.span
                            key={index}
                            variants={{
                                hover: {
                                    translateY: '-50%',
                                    opacity: 0,
                                    transition: {
                                        duration: 0.3,
                                        delay: index * 0.05,
                                    },
                                },
                            }}
                            className="inline-block"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.div>
                <motion.div className="text-white font-bold text-xl ">
                    {Array.from(title).map((letter, index) => (
                        <motion.span
                            initial={{ translateY: '0%', opacity: 0 }}
                            variants={{
                                hover: {
                                    translateY: '-100%',
                                    opacity: 1,
                                    transition: {
                                        duration: 0.3,
                                        delay: index * 0.05,
                                    },
                                },
                            }}
                            key={index}
                            className="inline-block"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.div>

                <p className="text-white">{decription}</p>
            </motion.div>

            <div className="absolute top-0 left-0 w-full h-full saturate-100 overflow-hidden ">
                <Image
                    src={`/music/${imgSrc}.jpg`}
                    alt={title}
                    fill
                    objectFit="cover"
                    className="group-hover:scale-[1.15] transition-all duration-500 "
                />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-slate-800 opacity-60 transition-all duration-500 group-hover:bg-transparent" />
        </motion.div>
    );
};
