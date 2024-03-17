'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect } from 'react';

export const ClipPathLayout = () => {
    return (
        <div className="bg-slate-300 w-full h-full px-20 py-10 ">
            <div className="grid grid-cols-12 grid-rows-3 w-full h-full">
                <ClippathContent t="G" colSpan={6} />

                <ClippathContent t="Shopping" colSpan={6} />

                <ClippathContent t="Apple" colSpan={4} />

                <ClippathContent t="Cloud" colSpan={4} />

                <ClippathContent t="A" colSpan={4} />

                <ClippathContent t="Facebook" colSpan={3} />

                <ClippathContent t="Tiktoc" colSpan={3} />

                <ClippathContent t="wifi" colSpan={3} />

                <ClippathContent t="linkedin" colSpan={3} />
            </div>
        </div>
    );
};

const variants = {
    hover: {
        clipPath: [
            `polygon(0 0, 100% 0, 0% 0%, 0 100%)`,
            `polygon(0 0, 100% 0, 100% 100%, 0 100%)`,
        ],
        backgroundColor: 'rgb(0,0,0)',
    },
    exit: {
        clipPath: [
            `polygon(0 0, 100% 0, 100% 100%, 0 100%)`,
            `polygon(0 0, 0 100%, 100% 100%, 0 100%)`,
        ],
        backgroundColor: 'rgb(0,0,0)',
    },
};

const ClippathContent = ({ colSpan, t }: { colSpan: number; t: string }) => {
    const [isHover, setIsHover] = React.useState(false);
    const [isMount, setIsMount] = React.useState(false);

    const returnState = () => {
        if (!isMount) {
            return '';
        }
        return isHover ? 'hover' : 'exit';
    };

    return (
        <motion.div
            onHoverStart={() => {
                setIsHover(true);
                setIsMount(true);
            }}
            onHoverEnd={() => setIsHover(false)}
            className={`
                    col-span-${colSpan}  flex justify-center border-2 border-black items-center first-letter:uppercase text-2xl font-bold transition-all relative group `}
        >
            <span className="text-white mix-blend-difference relative z-10 ">
                {t}
            </span>

            <motion.div
                animate={returnState()}
                variants={variants}
                className="absolute inset-0  "
            />
        </motion.div>
    );
};
