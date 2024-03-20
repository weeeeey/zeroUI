'use client';
import {
    motion,
    inView,
    useInView,
    useScroll,
    useTransform,
} from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

export const DisappearLayout = () => {
    return (
        <div className="w-full flex h-[300vh]">
            <div className="sticky w-1/2 top-0 h-[100vh] bg-red-300 flex justify-center items-center">
                <div>
                    <div>title</div>
                    <div>name</div>
                    <div>ss</div>
                </div>
            </div>
            <div className="w-1/2 h-full p-10">
                <Disappear />
            </div>
        </div>
    );
};

const Disappear = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

    return (
        <motion.div
            ref={ref}
            style={{ scale }}
            className={`w-full bg-black h-[10%] origin-top `}
        />
    );
};
