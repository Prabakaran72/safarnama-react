declare module 'material-icons-react' {
    import * as React from 'react';

    export interface IconProps {
        icon: string;
        color?: string;
        size?: number | string;
        className?: string;
    }

    export const Icon: React.FC<IconProps>;
}
