'use client';
import { motion } from 'framer-motion';
import React from 'react';

export const DottedBtn = () => {
    return (
        <button
            className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md 
        hover:shadow-[4px_4px_0px_1px_black]  "
        >
            Hover me
        </button>
    );
};
