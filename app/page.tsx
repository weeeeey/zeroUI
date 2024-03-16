'use client';

import { StaggerLayout } from '@/components/ui/carousels/stagger';
import { ShiftingLayout } from '@/components/ui/countdown/shifting';
import { ShiftingDropLayout } from '@/components/ui/dropdown/shifting-drop';
import { StaggerDropLayout } from '@/components/ui/dropdown/stagger-drop';

const MainPage = () => {
    return (
        <div className="bg-black w-full flex justify-center items-center py-10">
            <StaggerDropLayout />
        </div>
    );
};

export default MainPage;
