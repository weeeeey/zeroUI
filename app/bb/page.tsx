'use client';
import Inner from '@/components/inner';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect } from 'react';

const Page = () => {
    const [isMount, setIsMount] = React.useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsMount(true);
        }, 2000);
    }, []);

    if (!isMount) return null;
    return (
        <motion.div key={1236236236} className="main">
            <Inner key={'bbbb'} backgroundColor={'#B0AD98'}>
                <h1>Home</h1>

                <div className="body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent imperdiet nibh sit amet velit dignissim, non
                        tempus nisl pellentesque. Praesent sagittis magna sit
                        amet ex blandit, id pharetra lectus feugiat. Preu,
                        suscipit egestas ipsum. Aenean mauris ligula, laoreet ut
                        volutpat sit amet, convallis et turpis.
                    </p>

                    <p>
                        Quisque molestie ullamcorper elementum. Sed sodales erat
                        augue. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Duis aliquet quis lectus vitae
                        venenatis. Aliquam erat volutpat. Nulla maximus sodales
                        nibh dapibus congue. Integer nec pharetra felis, quis
                        commodo elit. Fusce et aliquet neque. Vivamus leo diam,
                        pharetra ut lorem eu, suscipit egestas ipsum. Aenean
                        mauris ligula, laoreet ut volutpat sit amet, convallis
                        et turpis.
                    </p>
                </div>
            </Inner>
        </motion.div>
    );
};
export default Page;
