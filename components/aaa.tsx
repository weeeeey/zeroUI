'use client';
import { motion } from 'framer-motion';

import { useCallback, useEffect, useState } from 'react';

import React from 'react';

interface MouseProps {
    x: number;
    y: number;
}
// const lerp = (start: number, end: number, a: number) => {
//     return (end - start) * a + start;
// };

const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;
export const Aaa = () => {
    const [mouse, setMouse] = useState<MouseProps>({ x: 0, y: 0 });
    const [lerpMouse, setLerpMouse] = useState<MouseProps>({ x: 0, y: 0 });

    const ref = React.useRef<HTMLDivElement>(null);
    const mouseRef = React.useRef<HTMLDivElement>(null);

    const rafId = React.useRef(0);

    const handleMouseMover = (e: React.MouseEvent<HTMLDivElement>) => {
        if (
            e.clientX < e.currentTarget.offsetLeft ||
            e.clientX >
                e.currentTarget.offsetLeft + e.currentTarget.offsetWidth ||
            e.clientY < e.currentTarget.offsetTop ||
            e.clientY > e.currentTarget.offsetTop + e.currentTarget.offsetHeight
        ) {
            setMouse({
                x: ref.current?.offsetWidth! / 2,
                y: ref.current?.offsetHeight! / 2,
            });
        } else {
            setMouse({
                x: e.clientX - ref.current?.offsetLeft!,
                y: e.clientY - ref.current?.offsetTop!,
            });
        }
    };

    const animate = useCallback(() => {
        setLerpMouse((p) => ({
            x: lerp(p.x, mouse.x, 0.1),
            y: lerp(p.y, mouse.y, 0.1),
        }));

        rafId.current = window.requestAnimationFrame(animate);
    }, [mouse]);

    useEffect(() => {
        animate();
        return () => {
            cancelAnimationFrame(rafId.current);
        };
    }, [animate]);

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMover}
            className=" w-full h-full bg-black relative"
        >
            <motion.div
                ref={mouseRef}
                style={{
                    x: lerpMouse.x,
                    y: lerpMouse.y,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                className="w-10 h-10  absolute  bg-red-400 rounded-full"
            />
        </div>
    );
};
