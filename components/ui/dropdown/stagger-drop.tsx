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

const Wrappervariants = {
    visible: {
        scaleY: 1,
        transition: {
            staggerChildren: 0.1,
            when: 'beforeChildren',
        },
    },
    hidden: {
        scaleY: 0,
        transition: {
            staggerChildren: 0.1,
            when: 'afterChildren',
        },
    },
};

const IconVariants = {
    visible: {
        y: 0,
        scale: 1,
    },
    hidden: {
        y: -10,
        scale: 0,
    },
};

const ItemVariants = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            when: 'beforeChildren',
        },
    },
    hidden: {
        opacity: 0,
        y: -15,
        transition: {
            when: 'afterChildren',
        },
    },
};

export const StaggerDropLayout = () => {
    return (
        <div className="w-full h-[calc(100vh-5rem)] bg-white">
            <nav className="w-full py-10 flex justify-center items-center space-x-10">
                <StaggerDropSwitch title="Products" />
            </nav>
        </div>
    );
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
            <StaggerDropContent />
        </motion.div>
    );
};

const StaggerDropItem = ({
    text,
    handleClick,
}: {
    text: string;
    handleClick: () => void;
}) => {
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

function StaggerDropContent() {
    return (
        <motion.div
            initial={Wrappervariants.hidden}
            variants={Wrappervariants}
            style={{
                translateX: '-50%',
            }}
            className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48  overflow-hidden"
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
            variants={ItemVariants}
            className="text-slate-600 px-2 whitespace-nowrap pr-20 flex items-center justify-start"
        >
            <motion.div variants={IconVariants}>
                <Icon className="w-4 h-4 mr-2" />
            </motion.div>

            <span>{text}</span>
        </motion.div>
    );
};
