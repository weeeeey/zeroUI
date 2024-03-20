'use client';

import React, { useRef } from 'react';
import { DUMMY_TEXT } from './cards';
import { motion, useScroll, useTransform } from 'framer-motion';

export const TrippyHeroLayout = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({ target: containerRef });
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

    return (
        <div className="w-full  ">
            <TippySectionFirst />
            <div className="w-full h-[400vh] bg-transparent relative">
                <div className="sticky top-0 h-[100vh] bg-transparent flex justify-center items-center overflow-hidden">
                    {Array.from({ length: 30 }).map((_, i) => {
                        return (
                            <motion.div
                                key={i}
                                style={{
                                    rotate,
                                    translateX: `-50%`,
                                    translateY: '-50%',
                                    zIndex: 15 - i,
                                    height: `${3 + (i + 1) * 1.5}rem`,
                                    width: `${3 * (i + 1)}rem`,
                                }}
                                className={`${
                                    i % 2 === 0 ? 'bg-black' : 'bg-white'
                                }  absolute top-0 left-1/2`}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="w-full h-[100vh] bg-violet-600 flex justify-center items-center text-white">
                The rest of your website {`:)`}
            </div>
        </div>
    );
};

const TippySectionFirst = () => {
    return (
        <div className="w-full h-[70vh] bg-white flex flex-col justify-center items-center space-y-4 relative">
            <div
                style={{
                    clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                }}
                className="bg-black w-20 h-20 absolute top-0 left-0"
            />
            <div
                style={{
                    clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                }}
                className="bg-black w-20 h-20 absolute bottom-0 right-0 -rotate-180"
            />
            <div className="font-extrabold text-6xl">Drive in the depp end</div>
            <div>{DUMMY_TEXT}</div>
            <button className="uppercase bg-black p-2 font-semibold text-white">
                get started
            </button>
        </div>
    );
};
