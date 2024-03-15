'use client';

import { ColorChageLayout } from '@/components/ui/cards/color-change';
import { ShuffleLayout } from '@/components/ui/cards/shuffle';
import { BlogPostLayout } from '@/components/ui/carousels/blog-post';

const MainPage = () => {
    return (
        <div className="bg-black w-full h-full  flex justify-center items-center px-20 py-10">
            <BlogPostLayout />
        </div>
    );
};

export default MainPage;
