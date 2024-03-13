'use client';

import { HamburgerBtn } from '@/components/ui/buttons/hamburger-btn';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { EncryptBtn } from '@/components/ui/buttons/encrypt-btn';

const MainPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full h-full bg-sky-300 flex justify-center items-center px-20 py-10">
            <div className="w-full h-full bg-white/40 rounded-lg">
                <motion.div className="w-full px-4 py-2 bg-black/90  flex justify-center items-center ">
                    <EncryptBtn />
                </motion.div>
            </div>
        </div>
    );
};

export default MainPage;
