'use client';
import { motion } from 'framer-motion';
import { MousePointer } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

export const HoverTilt = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect === undefined) return;
        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect!.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect!.top) * ROTATION_RANGE;

        const rY = mouseX / width - HALF_ROTATION_RANGE;
        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

        setRotateY(rY);
        setRotateX(rX);
    };

    const handleLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            ref={containerRef}
            style={{
                transformStyle: 'preserve-3d',
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleLeave}
            animate={{
                rotateX,
                rotateY,
            }}
            className="w-full h-full bg-white bg-opacity-30 rounded-xl p-4 "
        >
            <motion.div
                style={{
                    transformStyle: 'preserve-3d',
                    transform: 'translateZ(75px)',
                }}
                className="bg-white rounded-xl h-full w-full flex flex-col justify-center items-center "
            >
                <MousePointer
                    style={{
                        transform: 'translateZ(75px)',
                    }}
                    className="w-10 h-10 "
                />
                <motion.div
                    style={{
                        transform: 'translateZ(50px)',
                    }}
                    className="uppercase font-bold text-2xl"
                >
                    hover me
                </motion.div>
            </motion.div>
        </motion.div>
    );
};
