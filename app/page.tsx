'use client';

import { FitTextLayout } from '@/components/ui/text/fit-text';
import { VanishLayout } from '@/components/ui/text/vanish';

const MainPage = () => {
    return (
        <div className="bg-white h-full w-full flex justify-center items-center p-10">
            <FitTextLayout />
        </div>
    );
};

export default MainPage;
