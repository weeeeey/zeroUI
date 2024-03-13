import { LogIn, LogOut } from 'lucide-react';
import React from 'react';

export const RoundedBtn = () => {
    return (
        <button className=" bg-black border-2 border-violet-500 rounded-lg flex justify-center items-center space-x-4 px-4 py-2 group relative overflow-hidden">
            <LogIn className="text-violet-400 w-5 h-5 mix-blend-difference relative z-10 delay-150" />
            <span className="uppercase text-violet-400 font-bold mix-blend-difference relative z-10 delay-150">
                sign up free
            </span>
            <div className="absolute top-[100%] left-[100%] bg-violet-500 w-72 h-20 rounded-full   transition-all duration-1000 group-hover:scale-[3]" />
        </button>
    );
};
