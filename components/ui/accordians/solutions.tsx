'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ItemProps {
    seletedId: number;
    idx: number;

    onClick: (idx: number) => void;
    title: string;
}

const TEXT =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium in iusto iure aliquam commodi possimus eaque sit recusandae incidunt?';

const Item = ({ idx, onClick, seletedId, title }: ItemProps) => {
    return (
        <div
            className={`${
                idx === seletedId && 'border-violet-500 text-violet-500'
            } border w-full rounded-md cursor-pointer`}
        >
            <div onClick={() => onClick(idx)} className="p-4">
                <h1 className=" font-semibold text-2xl text-start">{title}</h1>
                <p
                    className={`text-start transition-all duration-500 overflow-hidden  ${
                        seletedId === idx ? 'h-32 sm:pt-10' : 'h-0'
                    }`}
                >
                    {TEXT}
                </p>
            </div>
            <footer
                className={`flex justify-center items-center text-white bg-indigo-500 overflow-hidden h-0 transition-all ${
                    seletedId === idx && 'h-10 '
                }`}
            >
                <span>Learn more</span>
            </footer>
        </div>
    );
};

const MyImage = ({
    image,
    selectedId,
    idx,
}: {
    idx: number;
    selectedId: number;
    image: string;
}) => {
    return (
        <AnimatePresence>
            {selectedId === idx && (
                <motion.img
                    src={image}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="w-[100%] h-96 rounded-xl absolute top-0 left-0"
                />
            )}
        </AnimatePresence>
    );
};

export const Solutions = () => {
    const [selectedId, setSelectedId] = useState(0);
    const [image, setImage] = useState('');
    // const [isMount, setisMount] = useState(false);
    const handleClick = (idx: number) => {
        setSelectedId(idx);
    };

    // useEffect(() => {
    //     setisMount(true);
    // }, []);

    useEffect(() => {
        switch (selectedId) {
            case 0:
                setImage('/vertical/1.webp');
                break;
            case 1:
                setImage('/vertical/s4-day.jpg');
                break;
            default:
                setImage('/vertical/sec.jpg');
        }
    }, [selectedId]);

    // if (!isMount) return null;

    return (
        <div className="w-full h-auto border-2 px-4 py-10 flex flex-col space-y-5 overflow-hidden">
            <h1 className="font font-extrabold text-2xl">Solutions</h1>
            <Item
                idx={0}
                onClick={handleClick}
                seletedId={selectedId}
                title="Individuals"
            />
            <Item
                idx={1}
                onClick={handleClick}
                seletedId={selectedId}
                title="Startups"
            />
            <Item
                idx={2}
                onClick={handleClick}
                seletedId={selectedId}
                title="Enterprises"
            />

            <div className="relative w-full h-96">
                {Array.from({ length: 3 }).map((_, idx) => (
                    <MyImage
                        key={idx}
                        idx={idx}
                        image={image}
                        selectedId={selectedId}
                    />
                ))}
                {/* <MyImage idx={0} image={image} selectedId={selectedId} /> */}
                {/* <MyImage idx={1} image={image} selectedId={selectedId} /> */}
                {/* <MyImage idx={2} image={image} selectedId={selectedId} /> */}
            </div>
        </div>
    );
};
