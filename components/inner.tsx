'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { slide, opacity, perspective } from '../lib/variants';

const anim = (variants: any) => {
    return {
        initial: 'initial',
        animate: 'enter',
        exit: 'exit',
        variants,
    };
};

export default function Inner({
    children,
    backgroundColor,
}: {
    children: React.ReactNode;
    backgroundColor: string;
}) {
    return (
        <div className="inner">
            <motion.div className="slide" {...anim(slide)} />
            <motion.div className="page" {...anim(perspective)}>
                <motion.div {...anim(opacity)}>
                    <div className="header">
                        <Link href="/aa">Home</Link>
                        <Link href="/bb">About</Link>
                    </div>
                    {children}
                </motion.div>
            </motion.div>
        </div>
    );
}
