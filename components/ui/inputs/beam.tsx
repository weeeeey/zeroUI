import { ArrowRight, ChevronRight } from 'lucide-react';
import React from 'react';

export const BeamLayout = () => {
    return (
        <div className="w-full h-full bg-black flex justify-center items-center">
            <Beam />
        </div>
    );
};

const Beam = () => {
    return (
        <form className="relative w-[30rem] z-0">
            <input
                placeholder="Enter your email"
                type="text"
                className="py-4 pl-6 pr-32 rounded-full bg-slate-700 w-full font-bold text-white outline-none"
            />
            <button
                type="submit"
                className="px-4 py-2 rounded-full bg-white absolute top-1/2 right-2 -translate-y-1/2 text-sm font-semibold group flex "
            >
                Join Waitlist
                <ArrowRight className="w-0 h-5  group-hover:w-5 group-hover:ml-2 transition-all" />
            </button>
            <div className="absolute -left-1 -top-1 -bottom-1 right-1/2 bg-red-700 rounded-l-full -z-10 " />
            <div className="absolute left-1/2 -top-1 -bottom-1 -right-1 bg-red-500 rounded-r-full -z-10 " />
        </form>
    );
};
