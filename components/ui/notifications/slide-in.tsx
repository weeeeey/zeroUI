'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const TEXT = 'New notification from Alexandra Black';
export const SlideInLayout = () => {
    const [notifications, setNotifications] = useState<string[]>([]);

    const handleClick = () => {
        setNotifications((p) => [`${p.length} ${TEXT}`, ...p]);
    };
    useEffect(() => {
        let a: NodeJS.Timeout;

        if (notifications.length > 0)
            a = setTimeout(() => setNotifications((p) => p.slice(1)), 5000);
        return () => clearTimeout(a);
    }, [notifications]);

    return (
        <div className="w-full h-full bg-white flex justify-center items-center">
            <button
                onClick={handleClick}
                className="text-white first-letter:uppercase px-4 py-2 bg-indigo-400"
            >
                add notification
            </button>
            <SlideIn notifications={notifications} />
        </div>
    );
};

const SlideIn = ({ notifications }: { notifications: string[] }) => {
    if (notifications.length <= 0) return null;
    return (
        <div className="fixed top-2 right-2 flex flex-col">
            <AnimatePresence>
                {notifications.map((n, i) => (
                    <motion.div
                        key={i}
                        transition={{
                            type: 'spring',
                        }}
                        animate={{ y: [20, 0] }}
                        exit={{ x: '100%', opacity: 0 }}
                        className="my-2 bg-indigo-400 px-4 py-2 text-sm text-white"
                    >
                        {n}
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};
