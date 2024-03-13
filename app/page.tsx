'use client';

import { HamburgerBtn } from '@/components/ui/buttons/hamburger-btn';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MainPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full h-full bg-sky-300 flex justify-center items-center px-20 py-10">
            <div className="w-full h-full bg-white/40 rounded-lg">
                <motion.div
                    animate={isOpen ? 'open' : 'closed'}
                    className="w-full px-4 py-1 bg-red-200 "
                >
                    <HamburgerBtn onClick={() => setIsOpen((p) => !p)} />
                </motion.div>
            </div>
        </div>
    );
};

export default MainPage;
