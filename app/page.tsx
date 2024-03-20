'use client';

import { CollapseCardLayout } from '@/components/ui/collapse-card';
import { DisappearLayout } from '@/components/ui/disappeat';
import { CustomKanban } from '@/components/ui/dnd';
import { ImageGridLayout } from '@/components/ui/image-grid';
import { PathFinder } from '@/components/ui/loaders/path-finder';
import { FitTextLayout } from '@/components/ui/text/fit-text';
import { VanishLayout } from '@/components/ui/text/vanish';
import { TrippyHeroLayout } from '@/components/ui/trippy-hero';
import { WaterDropHeroLayout } from '@/components/ui/water-drop-hero';

const MainPage = () => {
    return (
        <div className="w-full h-full flex justify-center items-center p-20 ">
            <CollapseCardLayout />
        </div>
    );
};

export default MainPage;
