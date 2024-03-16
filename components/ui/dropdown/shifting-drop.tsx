'use client';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export const ShiftingDropLayout = () => {
    return (
        <div className="w-full h-[calc(100vh-5rem)] bg-blue-200">
            <ShftingDrop />
        </div>
    );
};

const ShftingDrop = () => {
    return (
        <nav className="w-full py-10 flex justify-center items-center space-x-10">
            <ShiftingDropSwitch title="Products" />
            <ShiftingDropSwitch title="Plan" />
            <ShiftingDropSwitch title="Blog" />
        </nav>
    );
};

const ShiftingDropSwitch = ({ title }: { title: string }) => {
    const [isHover, setIsHover] = useState(false);

    const handleHover = (bool: boolean) => {
        setIsHover(bool);
    };

    useEffect(() => {
        console.log(isHover);
    }, [isHover]);

    return (
        <motion.div
            onHoverStart={() => handleHover(true)}
            onHoverEnd={() => handleHover(false)}
            className="relative w-20"
        >
            <ShiftingDropItem text={title} />
            <ShiftingDropContent isHover={isHover} />
        </motion.div>
    );
};

const ShiftingDropItem = ({ text }: { text: string }) => {
    return (
        <div className="cursor-pointer flex justify-center items-center space-x-2 group text-slate-500 hover:text-red-500">
            <span>{text}</span>
            <ChevronDown className="w-5 h-5 group-hover:rotate-180 transition-all " />
        </div>
    );
};

interface ShiftingDropContentProps {
    isHover: boolean;
}
export default function ShiftingDropContent({
    isHover,
}: ShiftingDropContentProps) {
    return (
        <>
            {isHover && (
                <motion.div className="w-20 h-20 absolute top-[100%] left-0 bg-transparent ">
                    <div className="absolute top-1 left-1 right-1 bottom-1 bg-blue-500"></div>
                </motion.div>
            )}
        </>
    );
}
