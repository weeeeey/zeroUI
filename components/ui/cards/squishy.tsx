'use client';
import { motion } from 'framer-motion';
import React from 'react';

const TEXT =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem.';

export const Squishy = () => {
    return (
        <motion.div
            whileHover="hover"
            className="w-1/2  bg-indigo-500 text-white rounded-xl p-4 relative  group hover:scale-[1.05] transition-all"
        >
            <div className="relative z-20 flex flex-col space-y-10 justify-between items-start">
                <div className=" bg-white bg-opacity-40  rounded-full px-2 py-1 text-sm">
                    Pro
                </div>
                <div className="text-4xl font-extrabold pr-20">$299/ Month</div>
                <p className="text-start pr-10">{TEXT}</p>
                <button className="uppercase text-center w-full bg-white text-black rounded-md py-2 font-semibold">
                    get it now
                </button>
            </div>
            <div className="absolute top-1/2 left-1/2 w-[50%] h-[100%]  -translate-x-1/2 -translate-y-1/2 group-hover:scale-[2] flex flex-col justify-center items-center transition-all duration-1000">
                <motion.div
                    variants={{
                        hover: {
                            rotateX: '70deg',
                        },
                    }}
                    className={`h-40 w-40 bg-black rounded-full transition-all duration-1000 `}
                />
                <motion.div
                    initial={{ rotateX: '70deg' }}
                    style={{
                        translateY: '-20%',
                    }}
                    variants={{
                        hover: {
                            rotateX: '0deg',
                        },
                    }}
                    className={`h-40 w-40 bg-black rounded-full  transition-all duration-1000 `}
                />
            </div>
        </motion.div>
    );
};
