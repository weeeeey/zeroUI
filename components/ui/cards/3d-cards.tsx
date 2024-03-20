'use client';
import { motion } from 'framer-motion';
import React from 'react';

const ThreeDCards = () => {
    return (
        <div className="w-full h-full">
            <div className="w-full h-full flex justify-center items-center space-x-4 p-40 ">
                <motion.div
                    whileHover={{
                        translateZ: '200px',
                        rotateY: '30deg',
                        perspective: 1000,
                    }}
                    className="w-full h-full bg-center relative "
                    style={{
                        backgroundImage:
                            'url(https://res.cloudinary.com/highflyer910/image/upload/v1603650794/vrpics/6.png)',
                    }}
                >
                    <motion.div
                        whileHover={{ opacity: 0 }}
                        className="absolute inset-0 bg-black opacity-50"
                    ></motion.div>
                </motion.div>
                <div
                    className="w-full h-full bg-center relative"
                    style={{
                        backgroundImage:
                            'url(https://res.cloudinary.com/highflyer910/image/upload/v1603650793/vrpics/3.png)',
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div
                    className="w-full h-full bg-center relative"
                    style={{
                        backgroundImage:
                            'url(https://res.cloudinary.com/highflyer910/image/upload/v1603650794/vrpics/7.png)',
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div
                    className="w-full h-full bg-center relative"
                    style={{
                        backgroundImage:
                            'url(https://res.cloudinary.com/highflyer910/image/upload/v1710336152/vrpics/12.png)',
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div
                    className="w-full h-full bg-center relative"
                    style={{
                        backgroundImage:
                            'url(https://res.cloudinary.com/highflyer910/image/upload/v1603650793/vrpics/5.png)',
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div
                    className="w-full h-full bg-center relative"
                    style={{
                        backgroundImage:
                            'url(https://res.cloudinary.com/highflyer910/image/upload/v1603650793/vrpics/2.png)',
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div
                    className="w-full h-full bg-center relative"
                    style={{
                        backgroundImage:
                            'url(https://res.cloudinary.com/highflyer910/image/upload/v1603650793/vrpics/4.png)',
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div
                    className="w-full h-full bg-center relative"
                    style={{
                        backgroundImage:
                            'url(https://res.cloudinary.com/highflyer910/image/upload/v1603650793/vrpics/1.jpg)',
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div
                    className="w-full h-full bg-center relative"
                    style={{
                        backgroundImage:
                            'url(https://res.cloudinary.com/highflyer910/image/upload/v1603650794/vrpics/8.png)',
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div
                    className="w-full h-full bg-center relative"
                    style={{
                        backgroundImage:
                            'url(https://res.cloudinary.com/highflyer910/image/upload/v1603650796/vrpics/16.png)',
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div
                    className="w-full h-full bg-center relative"
                    style={{
                        backgroundImage:
                            'url(https://res.cloudinary.com/highflyer910/image/upload/v1603650796/vrpics/15.png)',
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div
                    className="w-full h-full bg-center relative"
                    style={{
                        backgroundImage:
                            'url(https://res.cloudinary.com/highflyer910/image/upload/v1603650800/vrpics/21.png)',
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div
                    className="w-full h-full bg-center relative"
                    style={{
                        backgroundImage:
                            'url(https://res.cloudinary.com/highflyer910/image/upload/v1710165722/vrpics/014.png)',
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
            </div>
        </div>
    );
};

export default ThreeDCards;
