import { cn } from '@/lib/cn';
import { set } from 'animejs';
import React, { useEffect } from 'react';

export const CollapseCardLayout = () => {
    return (
        <div className="w-full overflow-hidden h-full px-20 py-10 bg-blue-200">
            <div>We are good.</div>
            <CollapseCard />
        </div>
    );
};

const CollapseCard = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    const [selId, setSelId] = React.useState<number>(0);
    return (
        <>
            <button onClick={() => setSelId((p) => p - 1)}>prev</button>
            <button onClick={() => setSelId((p) => p + 1)}>next</button>
            {selId}
            <div className="w-[400vw] h-full flex flex-nowrap relative">
                {Array.from({ length: 16 }).map((_, i) => (
                    <Item key={i} id={i} sel={selId} />
                ))}
            </div>
        </>
    );
};

const COLOR = [
    'bg-red-500',
    'bg-blue-500',
    'bg-orange-500',
    'bg-violet-500',
    'bg-red-500',
    'bg-blue-500',
    'bg-orange-500',
    'bg-violet-500',
    'bg-red-500',
    'bg-blue-500',
    'bg-orange-500',
    'bg-violet-500',
    'bg-red-500',
    'bg-blue-500',
    'bg-orange-500',
    'bg-violet-500',
];

const Item = ({ id, sel }: { id: number; sel: number }) => {
    return (
        <div
            style={{
                transform:
                    sel < id
                        ? `translateX(${(id - sel) * 110}%)`
                        : `translateX(${5 * id}%)`,
            }}
            className={cn('h-full  w-40 transition-all absolute  ', COLOR[id])}
        />
    );
};
