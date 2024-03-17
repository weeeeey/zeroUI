'use client';

import { motion } from 'framer-motion';
import React from 'react';

export const FlyoutLayout = () => {
    return (
        <div className="  flex justify-center items-start">
            <FlyoutWrapper />
        </div>
    );
};

const FlyoutWrapper = () => {
    return (
        <motion.div whileHover="hover" className="relative">
            <FlyoutSwitch title="Pricing" />
            <FlyoutContent />
        </motion.div>
    );
};

const FlyoutSwitch = ({ title }: { title: string }) => {
    return (
        <div className="relative text-white p-2 text-center">
            {title}
            <motion.div
                initial={{
                    scaleX: 0,
                }}
                variants={{
                    hover: {
                        scaleX: 1,
                    },
                }}
                className="w-full  absolute bottom-0 left-0  h-1 rounded-lg bg-indigo-400 origin-left"
            />
        </div>
    );
};

const FlyoutContent = () => {
    return (
        <motion.div
            initial={{
                y: 20,
                translateX: '-50%',
                opacity: 0,
            }}
            variants={{
                hover: {
                    opacity: 1,
                    y: 0,
                },
            }}
            className="  absolute top-[100%] left-1/2   w-96 h-96 "
        >
            <div className="absolute p-10 spacey-4 text-start bg-white top-2 left-2 right-2 bottom-2">
                <div>
                    <h3 className="font-bold text-2xl">For Individuals</h3>
                    <div>Introduction</div>
                    <div>Pay as you go</div>
                </div>
                <div className="">
                    <h3 className="font-bold text-2xl">For Companies</h3>
                    <div>Startups</div>
                    <div>Smbs</div>
                    <div>Enterprise</div>
                </div>
                <button className=" text-nowrap px-10 py-1 border-2 border-black text-2xl font-bold">
                    Contact sales
                </button>
            </div>
        </motion.div>
    );
};
