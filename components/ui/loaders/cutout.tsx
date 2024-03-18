import Image from 'next/image';

const Example = () => {
    return (
        <div className="w-full h-full">
            <CutoutTextLoader
                height="450px"
                background="white"
                // NOTE: Using GIFs for the background looks super cool :)
                imgUrl="/links/0.jpg"
            />
        </div>
    );
};

const CutoutTextLoader = ({
    height,
    background,
    imgUrl,
}: {
    height: any;
    background: any;
    imgUrl: any;
}) => {
    return (
        <div className="relative w-full h-full">
            <div style={{ background }} className="absolute inset-0  z-10" />
            <span
                className="font-black absolute inset-0 z-20 text-center bg-clip-text text-transparent pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                    backgroundImage: `url(${imgUrl})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    fontSize: 'clamp(3rem, 12vw, 10rem)',
                }}
            >
                Loading...
            </span>
        </div>
    );
};

export default Example;
