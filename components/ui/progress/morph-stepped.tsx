'use client';
import { Check } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const MorphSteppedLayout = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        console.log(step);
    }, [step]);
    return (
        <div className="w-full h-full bg-white/80 flex justify-center items-center  py-40">
            <div className="w-[33%] h-full flex flex-col justify-between items-center shadow-xl bg-white px-4 py-10 space-y-4">
                <MorphStepped step={step} />
                <div className="bg-slate-300 w-full h-full border-2 rounded-lg border-dashed" />
                <MorphSteppedButton setStep={setStep} step={step} />
            </div>
        </div>
    );
};

const MAX_STEP = 4;

const dotVariants = {
    active: {
        scale: 1,
        rotate: '0',
    },
    inActive: {
        scale: 0,
        rotate: '360deg',
    },
};

const MorphStepped = ({ step }: { step: number }) => {
    return (
        <div className="flex justify-center items-center space-x-10 w-full">
            {Array.from({ length: MAX_STEP }).map((_, i) => (
                <div key={i} className="px-4 py-2 rounded-full border relative">
                    {i + 1}

                    <motion.div
                        initial={{
                            scale: 0,
                            rotate: '180deg',
                        }}
                        animate={step > i ? 'active' : 'inActive'}
                        variants={dotVariants}
                        style={{
                            translateX: '-50%',
                            translateY: '-50%',
                        }}
                        className="p-2 text-white border-2 absolute top-1/2 left-1/2   bg-violet-500 rounded-full"
                    >
                        <Check />
                    </motion.div>
                    {i + 1 !== MAX_STEP && (
                        <>
                            <div className="w-[80%] h-1 bg-slate-300 absolute top-1/2 -translate-y-1/2 left-[110%] rounded-full" />
                            <motion.div
                                initial={{
                                    scaleX: 0,
                                }}
                                animate={i + 1 <= step ? 'active' : 'inActive'}
                                variants={{
                                    active: {
                                        scaleX: 1,
                                    },
                                    inActive: {
                                        scaleX: 0,
                                    },
                                }}
                                transition={{
                                    duration: 0.5,
                                }}
                                style={{
                                    translateY: '-50%',
                                    translateX: '75%',
                                }}
                                className="w-[80%] h-1 bg-violet-400 absolute top-1/2 left-1/2 rounded-full origin-left"
                            />
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};
const MorphSteppedButton = ({
    setStep,
    step,
}: {
    step: number;
    setStep: (num: number) => void;
}) => {
    const handlePrev = () => {
        if (step <= 0) return;
        setStep(step - 1);
    };
    const handleNext = () => {
        if (step >= MAX_STEP) return;
        setStep(step + 1);
    };
    return (
        <div className="flex justify-end items-center space-x-4 w-full ">
            <button
                onClick={handlePrev}
                className="first-letter:uppercase hover:bg-slate-300 py-2 px-4 rounded-lg"
            >
                prev
            </button>
            <button
                onClick={handleNext}
                className="first-letter:uppercase bg-black text-white py-2 px-4 rounded-lg"
            >
                next
            </button>
        </div>
    );
};
