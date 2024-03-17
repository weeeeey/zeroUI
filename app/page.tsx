'use client';

import { ShuffleLayout } from '@/components/ui/cards/shuffle';
import { FlyoutLayout } from '@/components/ui/dropdown/flyout';
import { ClipPathLayout } from '@/components/ui/links/clip-path';
import { TakeoverLayout } from '@/components/ui/links/takeover';

const MainPage = () => {
    return (
        <div className="bg-white h-full w-full flex justify-center items-center p-10">
            <TakeoverLayout />
        </div>
    );
};

export default MainPage;
