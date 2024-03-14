'use client';
import React from 'react';
import { motion } from 'framer-motion';

export const DrawOutlineBtn = () => {
    return (
        // <motion.button
        //     whileHover={{
        //         borderTop: '2px solid #fff',
        //         borderRight: '2px solid #fff',
        //         borderBottom: '2px solid #fff',
        //         borderLeft: '2px solid #fff',
        //         transition: {
        //             duration: 2,
        //             borderTop: { duration: 1 },
        //             borderRight: { duration: 1, delay: 0.1 },
        //             borderBottom: { duration: 1, delay: 0.2 },
        //             borderLeft: { duration: 1, delay: 0.3 },
        //         },
        //     }}
        //     className="text-white font-medium text-xl rounded-lg
        //   px-4 py-2
        // "
        // >
        //     Hover me
        // </motion.button>
        <button className="text-white font-medium text-xl rounded-lg px-4 py-2 relative group">
            <span className="absolute top-0 left-0     group-hover:border w-0 group-hover:w-full transition-all duration-500  "></span>
            <span className="absolute top-0 right-0    group-hover:border h-0 group-hover:h-full transition-all duration-500 delay-300"></span>
            <span className="absolute bottom-0 right-0 group-hover:border w-0 group-hover:w-full transition-all duration-500 delay-500 "></span>
            <span className="absolute bottom-0 left-0  group-hover:border h-0 group-hover:h-full transition-all duration-500 delay-700 "></span>
            Hover me
        </button>
    );
};
