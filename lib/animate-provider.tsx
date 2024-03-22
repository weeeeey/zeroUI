'use client';

import { AnimatePresence } from 'framer-motion';
import React, { ReactNode } from 'react';

export const AnimateProvider = ({ children }: { children: ReactNode }) => {
    return <AnimatePresence mode="wait">{children}</AnimatePresence>;
};
