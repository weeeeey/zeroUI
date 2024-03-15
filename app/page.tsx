'use client';

import { ColorChageLayout } from '@/components/ui/cards/color-change';
import { ShuffleLayout } from '@/components/ui/cards/shuffle';

const MainPage = () => {
    return (
        <div className="bg-white w-full h-full  flex justify-center items-center px-20 py-10">
            <ShuffleLayout />
        </div>
    );
};

export default MainPage;
