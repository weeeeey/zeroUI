'use client';

import { ColorChageLayout } from '@/components/ui/cards/color-change';
import { ShuffleLayout } from '@/components/ui/cards/shuffle';
import { BlogPostLayout } from '@/components/ui/carousels/blog-post';
import { HorizontalLayout } from '@/components/ui/carousels/horizontal';
import { StaggerLayout } from '@/components/ui/carousels/stgger';
import { SwipeLayout } from '@/components/ui/carousels/swipe';

const MainPage = () => {
    return (
        <div className="bg-black w-full   flex justify-center items-center py-10">
            <StaggerLayout />
        </div>
    );
};

export default MainPage;
