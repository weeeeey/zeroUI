'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect } from 'react';

export const HoverImageLayout = () => {
    return (
        <div className="w-full h-full p-5 bg-black divide-y-2  flex flex-col justify-center ">
            <HoverContens
                title="about"
                description="learn what we do here"
                imgSrc="0"
            />
            <HoverContens
                title="clients"
                description="we work with great people"
                imgSrc="1"
            />
            <HoverContens
                title="portofolio"
                description="our work speaks for itself"
                imgSrc="2"
            />
            <HoverContens
                title="careers"
                description="we want cool people"
                imgSrc="3"
            />
            <HoverContens
                title="fun"
                description="incase you are bored"
                imgSrc="4"
            />
        </div>
    );
};

interface HoverContensProps {
    title: string;
    description: string;
    imgSrc: string;
}

const HoverContens = ({ description, imgSrc, title }: HoverContensProps) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const [left, setLeft] = React.useState(0);

    const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        setLeft(e.clientX - ref.current?.offsetLeft!);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={mouseMove}
            onMouseLeave={() => setLeft(0)}
            whileHover={'hover'}
            className="flex justify-between py-7 items-center text-slate-500 hover:text-white cursor-pointer relative "
        >
            <div>
                <motion.h1
                    variants={{
                        hover: {
                            x: -20,
                        },
                    }}
                    transition={{
                        staggerChildren: 0.075,
                        delayChildren: 0.5,
                        type: 'spring',
                    }}
                    className=" text-5xl font-extrabold  "
                >
                    {Array.from(title).map((letter, index) => (
                        <motion.span
                            variants={{
                                hover: {
                                    x: 20,
                                },
                            }}
                            transition={{ type: 'spring' }}
                            className={`inline-block ${
                                index === 0 && 'uppercase'
                            }`}
                            key={index}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.h1>
                <div className="text-lg first-letter:uppercase">
                    {description}
                </div>
            </div>
            <HoverImage imgSrc={imgSrc} title={title} left={left} />
            <motion.div
                initial={{ opacity: 0 }}
                variants={{
                    hover: {
                        opacity: 1,
                        x: -20,
                        transition: {
                            type: 'spring',
                        },
                    },
                }}
            >
                <ArrowRight className="w-16 h-16  " />
            </motion.div>
        </motion.div>
    );
};

const HoverImage = ({
    imgSrc,
    title,
    left,
}: {
    imgSrc: string;
    title: string;
    left: number;
}) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const [moveLeft, setMoveLeft] = React.useState(0);

    useEffect(() => {
        setMoveLeft((ref.current?.offsetLeft! - left) / 10);
    }, [left]);

    return (
        <motion.div
            ref={ref}
            initial={{ scale: 0, rotate: '-30deg' }}
            variants={{
                hover: {
                    scale: 1,
                    rotate: '30deg',
                },
            }}
            style={{
                x: moveLeft,
            }}
            transition={{
                type: 'spring',
            }}
            className="absolute top-0 left-1/2 w-40 h-32 z-20 "
        >
            <Image
                alt={title}
                src={`/links/${imgSrc}.jpg`}
                fill
                className="rounded-lg"
            />
        </motion.div>
    );
};
