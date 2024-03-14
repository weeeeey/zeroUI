import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export const Layout = () => {
    return (
        <div className="w-full h-auto bg-white border py-6 px-3">
            <h1 className="text-4xl font-bold text-center mb-10">
                Hover a card
            </h1>
            <div className="grid grid-cols-2 gap-2 ">
                <Reveal
                    imgSrc={1}
                    title="Build"
                    subTitle="We make pretty buildings"
                />
                <Reveal
                    imgSrc={2}
                    title="See?"
                    subTitle="This one pretty nice"
                />
                <Reveal
                    imgSrc={3}
                    title="Wavy"
                    subTitle="You will wavy buildings"
                />
                <Reveal
                    imgSrc={4}
                    title="TALL!"
                    subTitle="We can even do TALL buildings"
                />
                <Reveal
                    imgSrc={5}
                    title="Modern"
                    subTitle="This one's real blocky"
                />
                <Reveal imgSrc={6} title="Modular" subTitle="That is all:)" />
            </div>
        </div>
    );
};

interface RevealProps {
    title: string;
    subTitle: string;
    imgSrc: number;
}

export const Reveal = ({ imgSrc, subTitle, title }: RevealProps) => {
    return (
        <div className="w-full h-full relative grid grid-cols-2 grid-rows-2 group">
            <div className="col-span-2 py-10 px-4 space-y-4 bg-black row-span-1">
                <h1 className="text-white font-bold text-2xl">{title}</h1>
                <p className="text-slate-400">{subTitle}</p>
            </div>
            <div className="relative w-full h-full ">
                <Image fill alt={title} src={`/card/${imgSrc}.png`} />
            </div>
            <button className="flex justify-center items-center uppercase hover:text-violet-400 ">
                more
                <ArrowRight className="rotate-[-45deg] stroke-1" />
            </button>
            <div className="h-full w-full absolute top-0 left-0 origin-bottom-left transition-all duration-500 group-hover:scale-50">
                <Image fill alt={title} src={`/card/${imgSrc}.png`} />
            </div>
        </div>
    );
};
