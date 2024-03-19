'use client';

import { BeamLayout } from '@/components/ui/inputs/beam';
import { HoverImageLayout } from '@/components/ui/links/hover-image';
import Example from '@/components/ui/loaders/cutout';
import { PathFinder } from '@/components/ui/loaders/path-finder';
import { SpringLayout } from '@/components/ui/modals/spring';
import { MorphSteppedLayout } from '@/components/ui/progress/morph-stepped';

const MainPage = () => {
    return (
        <div className="bg-black h-full w-full flex justify-center items-center p-10">
            <MorphSteppedLayout />
        </div>
    );
};

export default MainPage;
