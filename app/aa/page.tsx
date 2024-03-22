'use client';
import Inner from '@/components/inner';
import {
    motion,
    AnimatePresence,
    useInView,
    useScroll,
    useTransform,
} from 'framer-motion';
import React, { useEffect, useRef } from 'react';

const Page = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containsrRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containsrRef });
    const currentScrollTime = useTransform(scrollYProgress, [0, 1], [0, 1000]);
    console.log(currentScrollTime);
    useEffect(() => {
        // videoRef.current!.currentTime! = currentScrollTime.get();
        // console.log(currentScrollTime.get());
    }, [currentScrollTime]);

    return (
        <div ref={containsrRef} className="h-screen overflow-y-scroll ">
            <motion.video
                ref={videoRef}
                style={{
                    top: currentScrollTime,
                }}
                src="https://assets.codepen.io/39255/output_960.mp4"
                playsInline
                webkit-playsinline="true"
                preload="auto"
                muted
                controls
                className="video-background"
            ></motion.video>

            <div id="container"></div>
        </div>
    );
};
export default Page;
