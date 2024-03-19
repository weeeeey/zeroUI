'use client';

import { BubbleTextLayout } from '@/components/ui/bubble-text';
import { ChipTabLayout } from '@/components/ui/tabs/chip-tab';
import WaterDropGrid from '@/components/ui/water-drop';

const MainPage = () => {
    return (
        <div className="bg-white h-full w-full flex justify-center items-center p-10">
            <ChipTabLayout />
        </div>
    );
};

export default MainPage;
