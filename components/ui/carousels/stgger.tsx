import Image from 'next/image';
import React from 'react';
import { DUMMY_TEXT } from '../cards';

export const StaggerLayout = () => {
    return (
        <div className="w-full overflow-x-scroll h-full bg-slate-300 flex">
            <Stagger />
            <Stagger />
        </div>
    );
};

const POLYGON = {
    clipPath: 'polygon(0 0, 75% 0, 100% 25%,100% 100%, 0% 100%, 0 50%)',
};
const Stagger = () => {
    return (
        <div className={`bg-white w-[300vw]  flex  items-center  py-10`}>
            {Array.from({ length: 12 }).map((_, index) => (
                <div
                    key={index}
                    style={POLYGON}
                    className="bg-black w-96 h-96 m-2 p-4 flex flex-col justify-center items-start space-y-10 relative"
                >
                    <div
                        style={POLYGON}
                        className="absolute top-1 left-1 right-1 bottom-1   bg-white "
                    >
                        <Image
                            alt="headshot"
                            src={`/carousels/${index + 1}.jpg`}
                            width={100}
                            height={100}
                        />
                        <div>{DUMMY_TEXT}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};
