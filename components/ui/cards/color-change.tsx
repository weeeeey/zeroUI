import Image from 'next/image';
import React from 'react';
import { DUMMY_TEXT } from '.';
import { ArrowRight } from 'lucide-react';

export const Layout = () => {
    return (
        <div className="w-full h-full bg-white/80 p-10 flex flex-col space-y-10">
            <ColorChange decription={DUMMY_TEXT} title="Connect" imgSrc="3" />
        </div>
    );
};

interface ColorChangeProps {
    title: string;
    decription: string;
    imgSrc: string;
}
export const ColorChange = ({
    decription,
    title,
    imgSrc,
}: ColorChangeProps) => {
    return (
        <div className="w-full h-[30%] relative flex flex-col justify-end p-4 group ">
            <ArrowRight className="absolute z-10 top-5 right-5 w-7 h-7 group-hover:rotate-[-30deg] transition-all duration-500 text-slate-300" />
            <div className="relative space-y-4 z-10">
                <h1 className="text-white font-bold text-xl">{title}</h1>
                <p className="text-white">{decription}</p>
            </div>

            <div className="absolute top-0 left-0 w-full h-full saturate-100 overflow-hidden ">
                <Image
                    src={`/music/${imgSrc}.jpg`}
                    alt={title}
                    fill
                    objectFit="cover"
                    className="group-hover:scale-[1.15] transition-all duration-500 "
                />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-slate-800 opacity-60 transition-all duration-500 group-hover:bg-transparent" />
        </div>
    );
};
