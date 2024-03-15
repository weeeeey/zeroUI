'use client';

import { ColorChageLayout } from '@/components/ui/cards/color-change';
import { ShuffleLayout } from '@/components/ui/cards/shuffle';
import { BlogPostLayout } from '@/components/ui/carousels/blog-post';
import { SwipeLayout } from '@/components/ui/carousels/swipe';

const MainPage = () => {
    return (
        <div className="bg-white w-full h-full  flex justify-center items-center px-20 py-10">
            <SwipeLayout />
        </div>
    );
};

export default MainPage;
