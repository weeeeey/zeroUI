import React from 'react';
import { FlyOut } from './flyout';

export default function FlyoutMenu() {
    return (
        <FlyOut>
            <FlyOut.Toggle />
            <FlyOut.List>
                <FlyOut.Item>Edit</FlyOut.Item>
                <FlyOut.Item>Delete</FlyOut.Item>
            </FlyOut.List>
        </FlyOut>
    );
}
