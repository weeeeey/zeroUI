'use client';

import { Basic } from '@/components/ui/accordians/basic';
import { Solutions } from '@/components/ui/accordians/solutions';
import { Vertical } from '@/components/ui/accordians/vertical';
import { DrawOutlineBtn } from '@/components/ui/buttons/draw-outline-btn';
import { NeubrutalismBtn } from '@/components/ui/buttons/neubrutalism-btn';
import { NeumorphismBtn } from '@/components/ui/buttons/neumorphism-btn';
import { ShinyBtn } from '@/components/ui/buttons/shiny-btn';
import { SpotlightBtn } from '@/components/ui/buttons/spotlight-btn';
import { HoverDev } from '@/components/ui/cards/hover-dev';
import { HoverTilt } from '@/components/ui/cards/hover-tilt';
import { Squishy } from '@/components/ui/cards/squishy';

const MainPage = () => {
    return (
        <div className="bg-white w-full h-full  flex justify-center items-center px-20 py-10">
            <HoverDev />
        </div>
    );
};

export default MainPage;
