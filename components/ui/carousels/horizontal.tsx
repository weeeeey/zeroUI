'use client';
import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';
import React, { Ref, use, useEffect, useRef } from 'react';

export const HorizontalLayout = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div className="w-full  bg-black ">
            <div className="w-full h-[50vh] text-white bg-slate-800 flex justify-center items-center uppercase">
                scroll down
            </div>
            <div ref={containerRef} className="w-full h-[500vh] bg-black ">
                <Horizontal containerRef={containerRef} />
            </div>
            <div className="w-full h-[50vh] text-white bg-slate-800 flex justify-center items-center uppercase">
                scroll up
            </div>
        </div>
    );
};

const Horizontal = ({
    containerRef,
}: {
    containerRef: React.RefObject<HTMLDivElement>;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const [offsetWidth, setOffsetWidth] = React.useState(0);

    useEffect(() => {
        setOffsetWidth(ref.current!.offsetWidth * -1 + 1000);
    }, [ref]);

    const x = useTransform(scrollYProgress, [0, 1], [0, offsetWidth]);

    return (
        <motion.div
            ref={ref}
            style={{ x }}
            className="sticky top-0  w-[300vw] h-[100vh] flex justify-center items-center space-x-4 flex-nowrap overflow-hidden  "
        >
            {Array.from({ length: 12 }).map((_, idx) => (
                <div
                    key={idx}
                    className="w-[30vw] h-[30vw] flex justify-center items-center text-2xl bg-white"
                >
                    {idx}
                </div>
            ))}
        </motion.div>
    );
};
