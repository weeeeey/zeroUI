'use client';
import { motion } from 'framer-motion';
import React, { useCallback, useEffect, useRef, useState } from 'react';

interface IMouse {
    x: number;
    y: number;
}
const lerp = (start: number, end: number, a: number) =>
    (end - start) * a + start;

export const MagnetNav = () => {
    return (
        <motion.div className="w-full h-full bg-slate-950/85 ">
            <nav className="w-full px-10 mt-10 ">
                <ul className="text-black  flex justify-between items-center">
                    <MagnetItem text="Home" />
                    <MagnetItem text="About" />
                </ul>
            </nav>
        </motion.div>
    );
};
const MagnetItem = ({ text }: { text: string }) => {
    // lowercase 's' in 'string'
    const containerRef = useRef<HTMLLIElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);
    const animateId = useRef<number>(0);

    const [mouse, setMouse] = useState<IMouse>({ x: 50, y: 50 });
    const [delayMouse, setDelayMouse] = useState<IMouse>({ x: 50, y: 50 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (textRef.current) {
            const { left, width, top, height } =
                textRef.current.getBoundingClientRect();
            setMouse({
                x: ((e.clientX - left) / width) * 100,
                y: ((e.clientY - top) / height) * 100,
            });
        }
    };

    const animate = useCallback(() => {
        setDelayMouse((prev) => ({
            x: lerp(prev.x, mouse.x, 0.5),
            y: lerp(prev.y, mouse.y, 0.5),
        }));
        animateId.current = window.requestAnimationFrame(animate);
    }, [mouse]);

    useEffect(() => {
        animate();
        return () => {
            window.cancelAnimationFrame(animateId.current);
        };
    }, [animate]);

    return (
        <motion.li
            style={{
                x: `${delayMouse.x}%`,
                y: `${delayMouse.y}%`,
                translateX: '-50%',
                translateY: '-50%',
            }}
            ref={containerRef}
            className="rounded-xl transition-all px-4 py-2 bg-blue-300 relative group"
        >
            <motion.span
                style={{
                    x: `${delayMouse.x}%`,
                    y: `${delayMouse.y}%`,
                    translateX: '-50%',
                    translateY: '-50%',
                }} // Corrected style application
                ref={textRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setMouse({ x: 50, y: 50 })}
                className="inline-block relative p-1 z-10 "
            >
                {text}
            </motion.span>
            <motion.div className="absolute inset-0 bg-slate-300 rounded-xl group-hover:block hidden transition-all " />
        </motion.li>
    );
};
