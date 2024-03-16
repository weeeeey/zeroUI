'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { DUMMY_TEXT } from '../cards';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const POLYGON = {
    clipPath: 'polygon(0 0, 75% 0, 100% 25%,100% 100%, 0% 100%, 0 50%)',
};

export const StaggerLayout = () => {
    const [selectedIdx, setSelectedIdx] = useState(0);
    const handleClick = (index: number) => {
        setSelectedIdx(index);
    };
    const moveClick = (move: number) => {
        setSelectedIdx((p) => p + move);
    };

    useEffect(() => {
        console.log(selectedIdx);
    }, [selectedIdx]);

    return (
        <div className="w-full overflow-x-scroll h-full bg-slate-300 ">
            <div className="flex">
                <Stagger
                    row={0}
                    handleClick={handleClick}
                    selectedIdx={selectedIdx}
                />
                <Stagger
                    row={1}
                    handleClick={handleClick}
                    selectedIdx={selectedIdx}
                />
            </div>
            <StaggerButton moveClick={moveClick} />
        </div>
    );
};

interface StaggerProps {
    handleClick: (idx: number) => void;
    selectedIdx: number;
    row: number;
}

const Stagger = ({ handleClick, selectedIdx, row }: StaggerProps) => {
    return (
        <motion.div
            style={{ translateX: `${selectedIdx * -25}rem` }}
            className={`bg-white w-[300vw] transition-all duration-1000  flex  items-center  py-10`}
        >
            {Array.from({ length: 12 }).map((_, index) => (
                <div
                    key={index + row * 12}
                    style={POLYGON}
                    onClick={() => handleClick(index + row * 12)}
                    className="bg-black w-96 h-96 m-2 p-4 flex flex-col justify-center items-start space-y-10 relative cursor-pointer"
                >
                    <div
                        style={POLYGON}
                        className={`absolute top-1 left-1 right-1 bottom-1 transition-all duration-300   ${
                            index + row * 12 === selectedIdx
                                ? 'bg-violet-500'
                                : 'bg-white'
                        } `}
                    >
                        <Image
                            alt="headshot"
                            src={`/carousels/${index + 1}.jpg`}
                            width={100}
                            height={100}
                        />
                        <div>{DUMMY_TEXT}</div>
                    </div>
                </div>
            ))}
        </motion.div>
    );
};

const StaggerButton = ({
    moveClick,
}: {
    moveClick: (move: number) => void;
}) => {
    return (
        <div className="flex justify-center items-center space-x-5 py-10">
            <button onClick={() => moveClick(-1)}>
                <ArrowLeft className="w-20 h-20" />
            </button>
            <button onClick={() => moveClick(1)}>
                <ArrowRight className="w-20 h-20" />
            </button>
        </div>
    );
};
