'use client';
import { motion } from 'framer-motion';
import {
    ChevronDown,
    LucideIcon,
    ShareIcon,
    SquarePen,
    SquarePlus,
    Trash,
} from 'lucide-react';
import React, { useState } from 'react';

export const StaggerDropLayout = () => {
    return (
        <div className="w-full h-[calc(100vh-5rem)] bg-white">
            <nav className="w-full py-10 flex justify-center items-center space-x-10">
                <StaggerDropSwitch title="Products" />
            </nav>
        </div>
    );
};

const variants = {
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            staggerChildren: 0.7,
            delayChildren: 0.5,
        },
    },
    hidden: {
        y: -10,
        opacity: 0,
    },
};

const StaggerDropSwitch = ({ title }: { title: string }) => {
    const [isClick, setisClick] = useState(false);

    const handleClick = () => {
        setisClick((p) => !p);
    };

    return (
        <motion.div
            animate={isClick ? 'visible' : 'hidden'}
            className="relative "
        >
            <StaggerDropItem text={title} handleClick={handleClick} />
            <StaggerDropContent isClick={isClick} />
        </motion.div>
    );
};

interface StaggerDropItemProps {
    text: string;
    handleClick: () => void;
}

const StaggerDropItem = ({ text, handleClick }: StaggerDropItemProps) => {
    return (
        <button
            onClick={handleClick}
            className=" text-white flex justify-center items-center space-x-2 group bg-indigo-500 px-4 py-1 rounded-xl"
        >
            <span className="text-sm ">{text}</span>
            <ChevronDown className="w-5 h-5 group-hover:rotate-180 transition-all " />
        </button>
    );
};

interface StaggerDropContentProps {
    isClick: boolean;
}
function StaggerDropContent({ isClick }: StaggerDropContentProps) {
    return (
        <motion.div
            initial={{
                y: -10,
                opacity: 0,
            }}
            variants={variants}
            className=" absolute top-[110%] left-0 shadow-xl p-2 rounded-xl  flex flex-col justify-between items-start space-y-3"
        >
            <ContentIem text="Edit" icon={SquarePen} />
            <ContentIem text="Duplicate" icon={SquarePlus} />
            <ContentIem text="Share" icon={ShareIcon} />
            <ContentIem text="Remove" icon={Trash} />
        </motion.div>
    );
}

const ContentIem = ({
    text,
    icon: Icon,
}: {
    text: string;
    icon: LucideIcon;
}) => {
    return (
        <motion.div
            variants={variants}
            className="text-slate-600 px-2 flex items-center justify-start"
        >
            <Icon className="w-4 h-4 mr-2" />
            <span className="font-semibold">{text}</span>
        </motion.div>
    );
};
