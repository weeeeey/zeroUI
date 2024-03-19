'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ChipTabLayout = () => {
    const [seletecId, setSelectedId] = useState(0);

    const handleClick = (id: number) => {
        setSelectedId(id);
    };
    return (
        <div className="w-full h-full flex justify-center items-center bg-slate-950/80">
            <div className="flex justify-center items-center space-x-5  ">
                <ChipTab
                    handleclick={handleClick}
                    id={0}
                    selId={seletecId}
                    text="Home"
                />
                <ChipTab
                    handleclick={handleClick}
                    id={1}
                    selId={seletecId}
                    text="About"
                />
                <ChipTab
                    handleclick={handleClick}
                    id={2}
                    selId={seletecId}
                    text="Search"
                />
                <ChipTab
                    handleclick={handleClick}
                    id={3}
                    selId={seletecId}
                    text="FAQ"
                />
                <div className={`absolute bg-indigo-400 rounded-xl  `} />
            </div>
        </div>
    );
};

interface ChipTabProps {
    selId: number;
    text: string;
    id: number;
    handleclick: (id: number) => void;
}

const ChipTab = (props: ChipTabProps) => {
    return (
        <button
            onClick={() => props.handleclick(props.id)}
            className=" hover:bg-slate-700 px-2 py-1 rounded-lg relative"
        >
            <span
                className={`relative z-10 text-slate-300 ${
                    props.id === props.selId && 'text-white'
                }`}
            >
                {props.text}
            </span>
            {props.id === props.selId && (
                <motion.div
                    layoutId="pill-tab"
                    transition={{ type: 'spring', duration: 0.5 }}
                    className={`absolute rounded-lg bg-indigo-500 inset-0`}
                />
            )}
        </button>
    );
};
