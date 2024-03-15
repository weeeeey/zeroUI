'use client';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { DUMMY_TEXT } from '../cards';
import { useInView } from 'framer-motion';

const Disable =
    'cursor-not-allowed border-slate-600 bg-slate-400/20 text-slate-400';

export const BlogPostLayout = () => {
    const [currentX, setCurrentX] = useState(0);
    const [disabledLeft, setDisabledLeft] = useState(false);
    const [disabledRight, setDisabledRight] = useState(false);

    const moveLeft = () => {
        if (disabledLeft) return;
        setCurrentX(currentX - 270);
    };
    const moveRight = () => {
        if (disabledRight) return;
        setCurrentX(currentX + 270);
    };
    return (
        <div className="w-full  h-auto bg-slate-300 px-4 py-10 overflow-hidden">
            <div className="mb-10 flex justify-between items-center">
                <h1 className="text-2xl font-bold">The Blog Post</h1>
                <div className="flex justify-center items-center space-x-4">
                    <button
                        onClick={moveLeft}
                        className={`${
                            disabledLeft && Disable
                        } p-2 rounded-lg border-black border`}
                    >
                        <ArrowLeft />
                    </button>
                    <button
                        onClick={moveRight}
                        className={`${
                            disabledRight && Disable
                        } p-2 rounded-lg border-black border`}
                    >
                        <ArrowRight />
                    </button>
                </div>
            </div>
            <BlogPost
                currentX={currentX}
                handleLeft={() => setDisabledLeft((p) => !p)}
                handleRight={() => setDisabledRight((p) => !p)}
                disabledLeft={disabledLeft}
                disabledRight={disabledRight}
            />
        </div>
    );
};

interface BlogPostProps {
    currentX: number;
    handleLeft: () => void;
    handleRight: () => void;
    disabledLeft: boolean;
    disabledRight: boolean;
}

const BlogPost = ({
    currentX,
    handleLeft,
    handleRight,
    disabledLeft,
    disabledRight,
}: BlogPostProps) => {
    return (
        <div
            style={{ transform: `translateX(-${currentX}px)` }}
            className="w-[1500vw] flex space-x-4 transition-all duration-500 "
        >
            {Array.from({ length: 10 }).map((_, i) => (
                <BlogPostItem
                    key={i}
                    idx={i}
                    handleLeft={handleLeft}
                    handleRight={handleRight}
                    isFirstChild={i === 0}
                    isLastChild={i === 9}
                    disabledLeft={disabledLeft}
                    disabledRight={disabledRight}
                />
            ))}
        </div>
    );
};
interface BlogPostItemProps extends Omit<BlogPostProps, 'currentX'> {
    idx: number;
    isFirstChild?: boolean;
    isLastChild?: boolean;
    disabledLeft: boolean;
    disabledRight: boolean;
}

const BlogPostItem = ({
    idx,
    handleLeft,
    handleRight,
    isFirstChild,
    isLastChild,
    disabledLeft,
    disabledRight,
}: BlogPostItemProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { amount: 1 });

    useEffect(() => {
        if (isLastChild && inView) {
            handleRight();
        }
        if (disabledRight && isLastChild && !inView) {
            handleRight();
        }
    }, [inView, isLastChild]);

    useEffect(() => {
        if (isFirstChild && inView) {
            handleLeft();
        }
        if (disabledLeft && isFirstChild && !inView) {
            handleLeft();
        }
    }, [inView, isFirstChild]);

    return (
        <div ref={ref} className="w-[250px] h-full space-y-2">
            <div className="w-[250px] h-[150px] bg-red-400 flex justify-center items-center">
                {idx}
            </div>
            <div className="uppercase p-1 border border-black text-slate-400 inline-block rounded-md">
                john anderson
            </div>
            <div className="font-semibold">
                We built an AI chess bot with Chatbot
            </div>
            <p className="text-xs text-slate-400">{DUMMY_TEXT}</p>
        </div>
    );
};
