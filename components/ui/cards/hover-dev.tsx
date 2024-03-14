import { CreditCard, LucideIcon, Mail, User } from 'lucide-react';
import React from 'react';

interface ItemProps {
    title: string;
    description: string;
    icon: LucideIcon;
}

const Item = ({ description, icon: Icon, title }: ItemProps) => {
    return (
        <div className="border  relative group overflow-hidden rounded-md">
            <div className="relative z-10 space-y-4 px-4 py-2  group-hover:text-white transition-all duration-700">
                <Icon className="w-5 h-5 text-violet-500 group-hover:text-white duration-1000 " />
                <h1 className="font-semibold first-letter:uppercase ">
                    {title}
                </h1>
                <p className="text-slate-400 group-hover:text-slate-300">
                    Manage {description}
                </p>
            </div>
            <Icon className="w-28 h-28 translate-x-[50%] -translate-y-[30%]  absolute z-10 top-0 right-0 text-slate-200 opacity-80 transition-all duration-500 group-hover:rotate-12  " />
            <div className="bg-gradient-to-tr from-violet-300 to-violet-500 absolute h-full w-full top-[100%] left-0 transition-all duration-500 group-hover:top-0 " />
        </div>
    );
};

export const HoverDev = () => {
    return (
        <div className="border px-4 py-6">
            <h1 className="text-2xl font-semibold mb-4">Settings</h1>
            <div className="flex border justify-center items-center space-x-4">
                <Item description="profile" icon={User} title="account" />
                <Item description="email" icon={Mail} title="email" />
                <Item description="team" icon={User} title="team" />
                <Item description="cards" icon={CreditCard} title="biling" />
            </div>
        </div>
    );
};
