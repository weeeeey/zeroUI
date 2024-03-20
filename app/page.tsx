'use client';

import { ImageGridLayout } from '@/components/ui/image-grid';
import { PathFinder } from '@/components/ui/loaders/path-finder';
import { FitTextLayout } from '@/components/ui/text/fit-text';
import { VanishLayout } from '@/components/ui/text/vanish';
import { TrippyHeroLayout } from '@/components/ui/trippy-hero';
import { WaterDropHeroLayout } from '@/components/ui/water-drop-hero';

const MainPage = () => {
    return (
        <div className="w-full flex justify-center items-center ">
            <ImageGridLayout />
        </div>
    );
};

export default MainPage;
