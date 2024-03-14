'use client';

import { Basic } from '@/components/ui/accordians/basic';
import { Solutions } from '@/components/ui/accordians/solutions';
import { Vertical } from '@/components/ui/accordians/vertical';
import { DrawOutlineBtn } from '@/components/ui/buttons/draw-outline-btn';
import { NeubrutalismBtn } from '@/components/ui/buttons/neubrutalism-btn';
import { NeumorphismBtn } from '@/components/ui/buttons/neumorphism-btn';
import { ShinyBtn } from '@/components/ui/buttons/shiny-btn';
import { SpotlightBtn } from '@/components/ui/buttons/spotlight-btn';

const MainPage = () => {
    return (
        <div className="bg-white/50 w-full h-full  flex justify-center items-center px-20 py-10">
            <Solutions />
        </div>
    );
};

export default MainPage;
