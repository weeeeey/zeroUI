import React, { useEffect } from 'react';

export const SpotlightBtn = () => {
    const [x, setX] = React.useState(50);
    return (
        <button
            onMouseMove={(e) => {
                setX(
                    ((e.clientX - e.currentTarget.offsetLeft) /
                        e.currentTarget.offsetWidth) *
                        100
                );
            }}
            onMouseLeave={() => {
                setX(50);
            }}
            className="bg-black flex justify-center items-center px-32 rounded-xl py-6 relative overflow-hidden"
        >
            <span className="text-white font-medium text-xl relative z-10 mix-blend-difference">
                Hover me
            </span>
            <div
                style={{
                    left: `${x}%`,
                }}
                className="
            
            absolute w-32 h-32 rounded-full bg-white top-1/2  -translate-x-1/2 -translate-y-1/2"
            />
        </button>
    );
};
