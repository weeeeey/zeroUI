'use client';
import { DollarSign } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

const VerticalItem = ({
    imgSrc,
    title,
    idx,
    onClick,
    selectedId,
}: {
    onClick: (id: number) => void;
    selectedId: number;
    idx: number;
    title: string;
    imgSrc: string;
}) => {
    return (
        <div className="flex flex-col border-black border ">
            <button
                onClick={() => onClick(idx)}
                className="py-3 px-2 flex items-center "
            >
                <DollarSign className="w-7 h-7 bg-indigo-500 text-white px-1 mr-2" />
                <span className="text-2xl">{title}</span>
            </button>
            <div
                className={`overflow-hidden relative w-full transition-all duration-500 h-0 ${
                    idx === selectedId && 'h-[40vh]'
                }`}
            >
                <Image alt={title} src={imgSrc} fill />
                <p
                    className={`absolute bottom-0  transition-all duration-1000  left-0 px-2 py-1 bg-black bg-opacity-50 text-white ${
                        selectedId !== idx && '-bottom-[100%] '
                    }`}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum eius deserunt quia consectetur aliquid obcaecati
                    voluptatibus quos distinctio natus! Tenetur.
                </p>
            </div>
        </div>
    );
};

const VerticalLayout = () => {
    const [selectedId, setSelectedId] = useState(0);
    const handleClick = (id: number) => {
        setSelectedId(id);
    };
    return (
        <div className="bg-white w-full h-auto flex-col items-center justify-center">
            <VerticalItem
                onClick={handleClick}
                selectedId={selectedId}
                idx={0}
                title="Earn more"
                imgSrc="/vertical/1.webp"
            />
            <VerticalItem
                onClick={handleClick}
                selectedId={selectedId}
                idx={1}
                title="Play more"
                imgSrc="/vertical/s4-day.jpg"
            />

            <VerticalItem
                onClick={handleClick}
                selectedId={selectedId}
                idx={2}
                title="Keep track"
                imgSrc="/vertical/sec.jpg"
            />
            <VerticalItem
                onClick={handleClick}
                selectedId={selectedId}
                idx={3}
                title="Grow faster"
                imgSrc="/vertical/header.webp"
            />
        </div>
    );
};

export const Vertical = () => {
    return (
        <div className="w-full h-full bg-indigo-500 p-2 flex justify-center items-center">
            <VerticalLayout />
        </div>
    );
};
