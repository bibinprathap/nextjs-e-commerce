declare module '*.svg' {
    import { FunctionComponent } from 'react';

    const content: FunctionComponent<{
        className?: string;
    }>;

    // noinspection JSDuplicatedDeclaration
    export default content;
}

type Enumerable<T> = {
    [P in keyof T]: T[P];
};
