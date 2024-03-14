'use client';
import { ArrowDown } from 'lucide-react';
import React, { useState } from 'react';

const BasicItem = ({ title }: { title: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg flex flex-col items-center space-y-10 justify-between px-[25%] py-5 w-full ">
            <button
                onClick={() => setIsOpen((p) => !p)}
                className={`w-full flex justify-between items-center ${
                    isOpen ? 'text-violet-500' : 'text-black'
                }`}
            >
                <h1 className="text-2xl font-semibold text-start ">{title}</h1>
                <div className={`${isOpen && 'rotate-180'} transition-all `}>
                    <ArrowDown className="w-6 h-6" />
                </div>
            </button>
            <p
                className={`text-slate-400 border-b-2  transition-all duration-500 overflow-hidden ${
                    isOpen ? 'h-20' : 'h-0'
                }`}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque laboriosam neque reprehenderit saepe eius dolorum vel
                consequuntur perspiciatis ad vero.
            </p>
        </div>
    );
};

export const Basic = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center bg-white border">
            <h1 className="font-bold text-3xl text-center px-20 py-10">
                Frequently asked questions
            </h1>
            <BasicItem title="Why is the sky blue?" />
            <BasicItem title="Why did the chilcken cross the road?" />
            <BasicItem title="How many licks does it take to get to the center of a tootsie pop?" />
            <BasicItem title="Where's Waldo?" />
        </div>
    );
};
