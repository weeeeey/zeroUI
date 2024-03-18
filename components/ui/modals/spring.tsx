'use client';

import React, { useEffect } from 'react';
import { DUMMY_TEXT } from '../cards';
import { AnimatePresence, motion } from 'framer-motion';

export const SpringLayout = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    useEffect(() => {
        console.log(isOpen);
    }, [isOpen]);
    return (
        <div className="w-full h-full flex justify-start items-center">
            <SpringTrigger onClick={() => setIsOpen(true)} />
            <SpringModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
            {/* <SpringModall isOpen={isOpen} setIsOpen={setIsOpen} /> */}
        </div>
    );
};

const SpringTrigger = ({ onClick }: { onClick: () => void }) => {
    return (
        <button
            onClick={onClick}
            className=" px-4 py-1 text-xl text-white font-bold rounded-lg bg-gradient-to-r from-violet-400 to-violet-600"
        >
            Open Modal
        </button>
    );
};

const variants = {
    open: { scale: 1, rotate: '0deg' },
    closed: { scale: 0 },
};

const wrapperVariants = {
    close: { opacity: 0 },
    open: { opacity: 1 },
};

const SpringModal = ({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) => {
    return (
        <>
            {isOpen && (
                <motion.div
                    animate={isOpen ? 'open' : 'closed'}
                    variants={wrapperVariants}
                    onClick={onClose}
                    className={`fixed backdrop-blur-sm w-full h-full flex justify-center items-center `}
                >
                    <motion.div
                        initial={{
                            scale: 0,
                            // rotate: '30deg',
                        }}
                        animate={isOpen ? 'open' : 'closed'}
                        variants={variants}
                        onClick={(e) => e.stopPropagation()}
                        transition={{ duration: 0.2 }}
                        className="w-96 relative   bg-violet-500 space-y-5 py-10 px-5 flex flex-col justify-center items-center text-white rounded-lg  "
                    >
                        <h1 className="text-3xl font-bold">One more thing!</h1>
                        <p className="text-center">{DUMMY_TEXT}</p>
                        <div className="flex justify-center items-center space-x-2">
                            <button
                                onClick={onClose}
                                className=" bg-violet-500 hover:bg-violet-600 rounded-lg px-10 py-2 font-bold text-nowrap"
                            >
                                Nah,go back
                            </button>
                            <button
                                onClick={() => {
                                    console.log('first');
                                }}
                                className="bg-white hover:bg-slate-200 rounded-lg px-10 py-2 font-bold text-nowrap text-violet-500"
                            >
                                UnderStood!
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};

const SpringModall = ({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean;
    setIsOpen: (bool: boolean) => void;
}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: '12.5deg' }}
                        animate={{ scale: 1, rotate: '0deg' }}
                        exit={{ scale: 0, rotate: '0deg' }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold text-center mb-2">
                                One more thing!
                            </h3>
                            <p className="text-center mb-6">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Id aperiam vitae, sapiente
                                ducimus eveniet in velit.
                            </p>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                                >
                                    Nah, go back
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                                >
                                    Understood!
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
