'use  client';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { DUMMY_TEXT } from './cards';

export const WaterDropHeroLayout = () => {
    return (
        <div className="w-full h-full bg-slate-800/95  flex justify-center items-center text-white">
            <motion.div className="flex flex-col space-y-12">
                <WaterContent text="Hi,im bob" />
                <WaterContent text="I am a developer" />
                <WaterContent text={DUMMY_TEXT} />
            </motion.div>
        </div>
    );
};

const WaterContent = ({ text }: { text: string }) => {
    const ref = React.useRef<HTMLSpanElement>(null);
    const divRef = React.useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (divRef.current) {
            divRef.current.style.width = ref.current?.offsetWidth + 'px';
        }
    }, []);
    return (
        <motion.div className="overflow-hidden relative inline-block ">
            <motion.span
                ref={ref}
                className="inline-block relative text-3xl "
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {text}
            </motion.span>
            <motion.div
                ref={divRef}
                animate={{ scaleX: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0  bg-red-300 origin-right "
            />
        </motion.div>
    );
};
