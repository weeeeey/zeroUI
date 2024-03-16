'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

interface ITimeDateProps {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const TARGET_DATE = new Date('1/1/2025');

const SECONDS = 1000;
const MINUTES = SECONDS * 60;
const HOURS = MINUTES * 60;
const DAYS = HOURS * 24;

export const ShiftingLayout = () => {
    const [timeLeft, setTimeLeft] = useState<ITimeDateProps>();

    useEffect(() => {
        const interval = setInterval(handleTimeLeft, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleTimeLeft = () => {
        let current = new Date();
        let difference = TARGET_DATE.getTime() - current.getTime();
        setTimeLeft({
            days: Math.floor(difference / DAYS),
            hours: Math.floor((difference % DAYS) / HOURS),
            minutes: Math.floor((difference % HOURS) / MINUTES),
            seconds: Math.floor((difference % MINUTES) / SECONDS),
        });
    };
    if (!timeLeft) return null;
    return (
        <div className="w-full  p-4 bg-gradient-to-r from-violet-400 to-violet-600">
            <div className="flex justify-between items-center w-full h-full bg-white divide-x-2 ">
                <Shifting data={timeLeft.days} timeStr="days" />
                <Shifting data={timeLeft.hours} timeStr="hours" />
                <Shifting data={timeLeft.minutes} timeStr="minutes" />
                <Shifting data={timeLeft.seconds} timeStr="seconds" />
            </div>
        </div>
    );
};

interface ShiftProps {
    data: number;
    timeStr: 'days' | 'hours' | 'minutes' | 'seconds';
}

const Shifting = ({ data, timeStr }: ShiftProps) => {
    return (
        <div className="h-30 px-10 py-5 flex flex-col justify-center  w-full items-center space-y-4 ">
            <div className="relative overflow-hidden text-center w-full  ">
                <AnimatePresence mode="popLayout">
                    <motion.span
                        key={data}
                        initial={{ y: '100%' }}
                        animate={{ y: '0%' }}
                        exit={{ y: '-100%' }}
                        transition={{ duration: 0.75, ease: 'backIn' }}
                        className="font-bold text-3xl block   "
                    >
                        {data}
                    </motion.span>
                </AnimatePresence>
            </div>
            <div className="text-slate-400">{timeStr}</div>
        </div>
    );
};
