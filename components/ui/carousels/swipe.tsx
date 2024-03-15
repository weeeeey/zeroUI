'use client';
import { motion } from 'framer-motion';
import React, { ReactNode, useEffect, useState } from 'react';

export const SwipeLayout = () => {
    const [selectedItem, setSelectedItem] = useState(0);

    const handleClick = (idx: number) => {
        setSelectedItem(idx);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedItem((prev) => (prev + 1) % 10);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full bg-black overflow-hidden p-10">
            <div className="w-full overflow-hidden">
                <Swipe seletedItem={selectedItem}>
                    {Array.from({ length: 10 }).map((_, idx) => (
                        <SwipeItem
                            key={idx}
                            idx={idx}
                            handleClick={handleClick}
                        />
                    ))}
                </Swipe>
            </div>
            <div className="flex justify-center items-center space-x-2 ">
                {Array.from({ length: 10 }).map((_, idx) => (
                    <button
                        key={idx}
                        className={`w-4 h-4 transition-all  rounded-full ${
                            idx === selectedItem ? 'bg-white' : 'bg-slate-700'
                        }`}
                        onClick={() => handleClick(idx)}
                    />
                ))}
            </div>
        </div>
    );
};

interface SwipeProps {
    children: ReactNode;
    seletedItem: number;
}

const Swipe = ({ children, seletedItem }: SwipeProps) => {
    return (
        <motion.div
            style={{ translateX: `${-10 * seletedItem}%` }}
            className="w-[calc(1000%)] h-[50vh] flex transition-all duration-700"
        >
            {children}
        </motion.div>
    );
};

interface SwipeItemProps {
    idx: number;
    handleClick: (idx: number) => void;
}

const SwipeItem = ({ handleClick, idx }: SwipeItemProps) => {
    return (
        <div
            onClick={() => handleClick(idx)}
            className="w-full border h-[45vh] flex justify-center items-center bg-indigo-400"
        >
            {idx}
        </div>
    );
};
