'use client';
import React, { useState } from 'react';

export const ShinyBtn = () => {
    const [left, setLeft] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const left =
            ((e.clientX - e.currentTarget.offsetLeft) /
                e.currentTarget.offsetWidth) *
            100;
        setLeft(left);
    };

    return (
        <button
            className="text-white font-medium text-lg px-6 py-3 rounded-lg 
        bg-gradient-to-r bg-purple-500
        hover:from-purple-600 hover:to-purple-700 
        transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
            Sign up free
        </button>
    );
};
