'use state';
import { motion } from 'framer-motion';
import Image from 'next/image';

import React, { use, useEffect, useState } from 'react';

export const ShuffleLayout = () => {
    return (
        <div className="w-full h-full bg-sky-950 flex justify-center items-center py-20 px-40 relative ">
            <Shuffle idx={0} />
            <Shuffle idx={1} />
            <Shuffle idx={2} />
        </div>
    );
};

interface ShffleProps {
    idx: number;
}

export const Shuffle = ({ idx }: ShffleProps) => {
    const [next, setNext] = useState(idx);
    useEffect(() => {
        const interval = setInterval(() => {
            setNext((next) => (next + 2) % 3);
        }, 2000);
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        if (idx === 0) {
            console.log(next);
        }
    }, [idx, next]);
    return (
        <motion.div
            style={{
                zIndex: 3 - next,
                translateX: `${-50 + (next - 1) * 25}%`,
                translateY: `-50%`,
                rotateZ: `${(next - 1) * 10}deg`,
            }}
            className={`w-1/3 h-[80%]  border rounded-xl flex flex-col items-center justify-center space-y-4 px-20 bg-slate-800/20 backdrop-blur-md  transition-all duration-500 absolute top-1/2 left-1/2 `}
        >
            <div className="relative h-32 w-32  ">
                <Image
                    fill
                    alt="headshot"
                    src={`/card/headshot/${idx}.jpg`}
                    className={`rounded-full relative h-20 w-20 ${
                        next !== 0 && 'blur-sm'
                    } `}
                />
            </div>
            <p className="text-slate-600">{data[idx].description}</p>
            <h1 className="text-indigo-500">{data[idx].name}</h1>
        </motion.div>
    );
};

interface CardDateProps {
    [key: number]: { name: string; description: string };
}
const data: CardDateProps = {
    0: {
        name: 'Jenn F. - Marketing Director @ Square',
        description:
            "I feel like I've learned as much from X as I did completing my masters. It's the first thing I read every morning.",
    },
    1: {
        name: 'Adrian Y. - Product Marketing @ Meta',
        description:
            "My boss thinks I know what I'm doing. Honestly, I just read this newsletter.",
    },
    2: {
        name: 'Devin R. - Growth Marketing Lead @ OpenAI',
        description:
            'Can not believe this is free. If X was $5,000 a month, it would be worth every penny. I plan to name my next child after X.',
    },
};
