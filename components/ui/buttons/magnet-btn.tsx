'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

const arrowRightVariants = {
    hover: {
        rotate: '-45deg',
    },
};

const TEXT = 'You can write whatever text you want around this circle';
interface IMouse {
    x: number;
    y: number;
}
export const MagnetBtn = () => {
    const [isHover, setIsHover] = useState(false);
    const [mouse, setMouse] = useState<IMouse>();
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <motion.div
            ref={containerRef}
            onPointerMove={(e) => {
                let x = e.clientX - containerRef.current?.offsetLeft! - 64;
                let y = e.clientY - containerRef.current?.offsetTop! - 64;
                if (
                    x < 0 ||
                    y < 0 ||
                    x > containerRef.current?.offsetWidth! ||
                    y > containerRef.current?.offsetHeight! - 128!
                )
                    return;
                setMouse({
                    x,
                    y,
                });
            }}
            onPointerLeave={() => {
                setMouse({
                    x: 0,
                    y: 0,
                });
            }}
            className="w-1/2 h-1/2 bg-red-300"
        >
            <motion.button
                whileHover="hover"
                style={{
                    x: mouse?.x,
                    y: mouse?.y,
                }}
                className="w-32 h-32 overflow-hidden border-2 border-black rounded-full relative flex justify-center items-center bg-violet-300"
            >
                <motion.div
                    className="absolute z-10"
                    variants={arrowRightVariants}
                >
                    <ArrowRight className="w-16 h-16 " />
                </motion.div>
                <motion.div
                    initial={{ scale: 0 }}
                    variants={{
                        hover: {
                            scale: 3.5,
                        },
                    }}
                    transition={{ duration: 0.5 }}
                    className="w-10 h-10 rounded-full bg-white  "
                />
                {/* <svg className="absolute top-0 left-0 ">
                    <circle
                        id="circle"
                        cx="2.5rem"
                        cy="2.5rem"
                        r="21%"
                        fill="none"
                        stroke="black"
                        strokeWidth="2"
                    />
                    <textPath href="#circle">{TEXT}</textPath>
                </svg> */}
            </motion.button>
        </motion.div>
    );
};
