'use client';

import { BeamLayout } from '@/components/ui/inputs/beam';
import { HoverImageLayout } from '@/components/ui/links/hover-image';
import Example from '@/components/ui/loaders/cutout';
import { PathFinder } from '@/components/ui/loaders/path-finder';

const MainPage = () => {
    return (
        <div className="bg-blue-200 h-full w-full flex justify-center items-center p-10">
            <PathFinder />
        </div>
    );
};

export default MainPage;
