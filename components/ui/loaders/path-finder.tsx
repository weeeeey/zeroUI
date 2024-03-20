'use client';
import { findPath } from '@/lib/findPath';
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

export interface INode {
    x: number;
    y: number;
}

export const PathFinder = () => {
    const [path, setPath] = useState<INode[]>();
    const [isHover, setIsHover] = useState(-1);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const path = findPath(30);

        if (typeof path !== 'number') {
            setPath(path);
        }
    }, []);

    if (!path) return null;
    return (
        <div
            ref={containerRef}
            style={{
                gridTemplateRows: `repeat(30, minmax(0, 1fr))`,
            }}
            className="w-full h-full bg-blue-400 grid   "
        >
            {Array.from({ length: 30 }).map((_, idx) => {
                return (
                    <div
                        key={idx}
                        style={{
                            gridTemplateColumns: `repeat(30, minmax(0, 1fr))`,
                        }}
                        className="col-span-1 border grid"
                    >
                        {Array.from({ length: 30 }).map((_, colIdx) => {
                            // Check if this cell is part of the path
                            const isPath = path.some(
                                (node) => node.x === colIdx && node.y === idx
                            );
                            // Check if this cell is the first or last in the path
                            const isFirst =
                                path[0].x === colIdx && path[0].y === idx;
                            const isLast =
                                path[path.length - 1].x === colIdx &&
                                path[path.length - 1].y === idx;
                            const cellClass =
                                isFirst || isLast
                                    ? 'bg-red-500'
                                    : isPath
                                    ? 'bg-white'
                                    : '';

                            return (
                                <motion.div
                                    onHoverStart={() =>
                                        setIsHover(colIdx + idx * 30)
                                    }
                                    onHoverEnd={() => setIsHover(-1)}
                                    animate={
                                        isHover === colIdx + idx * 30
                                            ? {
                                                  backgroundColor: 'rgb(0,0,0)',
                                                  transition: { duration: 0.3 },
                                              }
                                            : {
                                                  backgroundColor:
                                                      'rgb(96 165 250)',
                                                  transition: { duration: 10 },
                                              }
                                    }
                                    className={`border ${cellClass} `}
                                    key={colIdx + idx * 30}
                                />
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};
