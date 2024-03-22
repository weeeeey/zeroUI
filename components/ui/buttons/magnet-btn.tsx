'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import React, { useCallback, useEffect, useRef, useState } from 'react';

const arrowRightVariants = {
    hover: {
        rotate: '-45deg',
    },
};

interface IMouse {
    x: number;
    y: number;
}
const lerp = (start: number, end: number, a: number) =>
    (end - start) * a + start;

export const MagnetBtn = () => {
    const [mouse, setMouse] = useState<IMouse>({
        x: 0,
        y: 0,
    });
    const [delayMouse, setDelayMouse] = useState<IMouse>({
        x: 0,
        y: 0,
    });
    const containerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const animateId = useRef<number>(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const x = e.clientX - buttonRef.current?.offsetLeft!;
        const y = e.clientY - buttonRef.current?.offsetTop!;
        setMouse({
            x,
            y,
        });
    };

    const animate = useCallback(() => {
        const { x, y } = mouse;
        setDelayMouse({
            x: lerp(delayMouse.x, x, 0.0005),
            y: lerp(delayMouse.y, y, 0.0005),
        });

        animateId.current = window.requestAnimationFrame(animate);
    }, [mouse, delayMouse]);

    useEffect(() => {
        animate();
        return () => {
            window.cancelAnimationFrame(animateId.current);
        };
    }, [animate]);

    return (
        <motion.div ref={containerRef} className="w-1/2 h-1/2 bg-red-300">
            <motion.button
                ref={buttonRef}
                onMouseMove={handleMouseMove}
                whileHover="hover"
                style={{
                    x: delayMouse?.x,
                    y: delayMouse?.y,
                    translateX: '-50%',
                    translateY: '-50%',
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
            </motion.button>
        </motion.div>
    );
};
