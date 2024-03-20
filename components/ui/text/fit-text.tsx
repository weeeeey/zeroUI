import React, { useEffect } from 'react';

export const FitTextLayout = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const textRef = React.useRef<HTMLDivElement>(null);

    const onClick = () => {
        const text = textRef.current?.innerText;
        const recWidth = containerRef.current?.getBoundingClientRect().width;

        if (textRef.current) {
            textRef.current.style.width = 1072 + 'px';
        }
        console.log(textRef.current?.getBoundingClientRect().width);
        // console.log(recWidth);
    };
    const resizeText = () => {
        const container = containerRef.current;
        const text = textRef.current;

        if (!container || !text) {
            return;
        }

        const containerWidth = container.offsetWidth;
        let min = 1;
        let max = 2500;

        while (min <= max) {
            const mid = Math.floor((min + max) / 2);
            text.style.fontSize = mid + 'px';

            if (text.offsetWidth <= containerWidth) {
                min = mid + 1;
            } else {
                max = mid - 1;
            }
        }

        text.style.fontSize = max + 'px';
    };

    return (
        <div
            className="flex h-screen w-full items-center overflow-hidden bg-slate-950"
            ref={containerRef}
        >
            <span
                className="absolute bottom-0 left-0 mx-auto whitespace-nowrap text-center font-bold uppercase text-slate-700"
                ref={textRef}
            >
                Fit text to container
            </span>
        </div>
    );
};

/**
 *   start , end
 *   start + (end-start)*a
 *   (1-a)start + a*end
 */
