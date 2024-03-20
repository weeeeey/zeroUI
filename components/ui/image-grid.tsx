'use client';
import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import { DUMMY_TEXT } from './cards';

export const ImageGridLayout = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    const minusScale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const y = useTransform(scrollYProgress, [0, 1], ['-105%', '0%']);

    return (
        <div className="w-full ">
            <div ref={containerRef} className="h-[400vh] w-full  bg-green-400">
                <ImageGrid
                    scale={scale}
                    y={y}
                    minusScale={minusScale}
                    opacity={opacity}
                />
            </div>
            <div className="h-[100vh] bg-violet-500 flex justify-center items-center text-5xl text-white font-extrabold">
                Last Page
            </div>
        </div>
    );
};

const ImageGrid = ({
    scale,
    y,
    minusScale,
    opacity,
}: {
    scale: MotionValue<number>;
    y: MotionValue<string>;
    minusScale: MotionValue<number>;
    opacity: MotionValue<number>;
}) => {
    return (
        <div className="h-[100vh] w-full  sticky top-0 grid grid-cols-3 grid-rows-3 gap-2">
            <motion.div
                style={{ scale }}
                className="origin-top-left scale-50 col-span-2 row-span-1 bg-red-500"
            >
                1
            </motion.div>
            <motion.div
                style={{ scale }}
                className="origin-top-right scale-50 col-span-1 row-span-2 bg-blue-500"
            >
                2
            </motion.div>
            <motion.div
                style={{ scale }}
                className="origin-bottom-left scale-50 col-span-1 row-span-2 bg-orange-500"
            >
                3
            </motion.div>
            <motion.div
                style={{ scale, translateY: y }}
                transition={{
                    duration: 2,
                }}
                className="origin-top-right  col-span-1 row-span-1 bg-violet-500"
            >
                4
            </motion.div>
            <motion.div
                style={{ scale }}
                className="origin-bottom-left scale-50 col-span-1 row-span-1 bg-amber-500"
            >
                5
            </motion.div>
            <motion.div
                style={{ scale }}
                className="origin-bottom-right scale-50 col-span-1 row-span-1 bg-white"
            >
                6
            </motion.div>
            <motion.div
                style={{
                    translateX: '-50%',
                    translateY: '-50%',
                    opacity,
                    scale: minusScale,
                }}
                className="absolute top-1/2 left-1/2 flex flex-col justify-center items-center "
            >
                <div className="font-bold text-2xl">photo gallery</div>
                <p className="text-center">{DUMMY_TEXT}</p>
            </motion.div>
        </div>
    );
};
