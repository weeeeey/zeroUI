'use client';

import { StaggerLayout } from '@/components/ui/carousels/stagger';
import { ShiftingLayout } from '@/components/ui/countdown/shifting';
import { ShiftingDropLayout } from '@/components/ui/dropdown/shifting-drop';

const MainPage = () => {
    return (
        <div className="bg-black w-full flex justify-center items-center py-10">
            <ShiftingDropLayout />
        </div>
    );
};

export default MainPage;
