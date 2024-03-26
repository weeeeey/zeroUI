import React from 'react';

interface FlyOutContextProps {
    open: boolean;
    toggle: (open: boolean) => void;
}
interface FlyOutProps {
    children: React.ReactNode;
}

const FlyOutContext = React.createContext<FlyOutContextProps | undefined>(
    undefined
);

const useSelectContext = () => {
    const context = React.useContext(FlyOutContext);
    if (!context) {
        throw new Error(
            'useSelectContext must be used within a SelectProvider'
        );
    }
    return context;
};

export function FlyOut({ children }: FlyOutProps) {
    const [open, toggle] = React.useState(false);

    return (
        <div className={`flyout`}>
            <FlyOutContext.Provider value={{ open, toggle }}>
                {children}
            </FlyOutContext.Provider>
        </div>
    );
}

function Toggle() {
    const { open, toggle } = useSelectContext();

    return (
        <div className="flyout-btn" onClick={() => toggle(!open)}>
            bbbb
        </div>
    );
}

function List({ children }: FlyOutProps) {
    const { open } = useSelectContext();

    return open && <ul className="flyout-list">{children}</ul>;
}

function Item({ children }: FlyOutProps) {
    return <li className="flyout-item">{children}</li>;
}

FlyOut.Toggle = Toggle;
FlyOut.List = List;
FlyOut.Item = Item;
