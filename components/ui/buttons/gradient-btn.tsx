'use client';

import { motion } from 'framer-motion';
import React from 'react';

export const GradientBtn = () => {
    return (
        <div className="group relative">
            <button className="bg-black/90 hover:scale-105 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-10 px-4 py-2 border-2 border-white rounded-xl group-hover:bg-transparent transition-all ">
                <div className="text-white font-bold text-nowrap z-30">
                    Hover me
                </div>
            </button>
            <div className="rounded-xl w-32 h-16 blur absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-300 group-hover:bg-red-400 transition-all"></div>
        </div>
    );
};
