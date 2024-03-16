'use client';

import { StaggerLayout } from '@/components/ui/carousels/stagger';
import { ShiftingLayout } from '@/components/ui/countdown/shifting';

const MainPage = () => {
    return (
        <div className="bg-black w-full   flex justify-center items-center py-10">
            <ShiftingLayout />
        </div>
    );
};

export default MainPage;
