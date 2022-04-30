// react
import {
    DependencyList,
    useCallback,
    useEffect, useMemo,
    useRef,
    useState,
} from 'react';
// third-party
import { ValidationRules } from 'react-hook-form';
import {
    //  FieldElement,
    //  FieldName,
    //  Ref,
    UseFormMethods,
} from 'react-hook-form/dist/types/form';
import {
    FieldElement,
    FieldName,
    Ref,
} from 'react-hook-form/dist/types/fields';

// application
import { IProduct } from '~/interfaces/product';

export function useGlobalMousedown(callback: (event: MouseEvent) => void, deps?: DependencyList) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const memoCallback = useCallback(callback, deps || []);

    useEffect(() => {
        document.addEventListener('mousedown', memoCallback);

        return () => document.removeEventListener('mousedown', memoCallback);
    }, [memoCallback]);
}

export type IDeferredDataSource<T> = () => Promise<T>;
export type IDeferredDataState<T> = { isLoading: boolean, data: T };

export function useDeferredData<T>(
    source: IDeferredDataSource<T>,
    defaultData: T,
    initialData?: T,
    deps: any[] = [],
): IDeferredDataState<T> {
    const [state, setState] = useState(() => ({
        isLoading: initialData === undefined,
        data: initialData || defaultData,
    }));
    const memoizedSource = useCallback(source, deps);
    const skipNextRef = useRef(initialData !== undefined);

    useEffect(() => {
        if (skipNextRef.current) {
            skipNextRef.current = false;

            return () => { };
        }

        let canceled = false;

        setState((curState) => {
            if (!curState.isLoading) {
                return { ...curState, isLoading: true };
            }

            return curState;
        });

        memoizedSource().then((data) => {
            if (canceled) {
                return;
            }

            setState(() => ({ isLoading: false, data }));
        });

        return () => {
            canceled = true;
        };
    }, [memoizedSource]);

    return state;
}

export type IProductTab = { id: number; name: string };
export type IWithCurrent<T> = T & { current: boolean };
export type IProductTabSource<T extends IProductTab> = (tab: T) => Promise<IProduct[]>;
export type IProductTabsState<T extends IProductTab> = {
    tabs: IWithCurrent<T>[];
    handleTabChange: (tab: IWithCurrent<T>) => void;
} & IDeferredDataState<IProduct[]>;

export function useProductTabs<T extends IProductTab>(
    tabs: T[],
    productsSource: IProductTabSource<T>,
    initialData?: IProduct[],
): IProductTabsState<T> {
    const [currentTabId, setCurrentTabId] = useState(1);
    const memoizedTabs = useMemo(() => (
        tabs.map((tab) => ({
            ...tab,
            current: currentTabId === tab.id,
        }))
    ), [tabs, currentTabId]);
    const currentTab = memoizedTabs.find((x) => x.current);
    const products = useDeferredData(() => (
        currentTab ? productsSource(currentTab) : Promise.resolve([])
    ), [], initialData, [currentTab]);
    const handleTabChange = useCallback((tab) => {
        setCurrentTabId(tab.id);
    }, [setCurrentTabId]);

    return useMemo(() => ({
        tabs: memoizedTabs,
        handleTabChange,
        ...products,
    }), [memoizedTabs, handleTabChange, products]);
}

export type IProductColumn = {
    title: string;
    source: IDeferredDataSource<IProduct[]>;
};

export function useProductColumns(columns: IProductColumn[]) {
    const products = useDeferredData(() => (
        Promise.all(columns.map((column) => column.source()))
    ), [], undefined, [columns]);

    return useMemo(() => (
        columns.map((column, index) => ({
            ...column,
            products: products.data[index] || [],
        }))
    ), [columns, products]);
}

export function useDetachableForm<T extends Record<string, any>>(formMethods: UseFormMethods<T>, detached: boolean) {
    const { register: originalRegister, unregister, trigger } = formMethods;

    const fieldNamesRef = useRef<(string | FieldName<T>)[]>([]);

    useEffect(() => {
        if (detached) {
            unregister(fieldNamesRef.current as FieldName<T>[]);

            fieldNamesRef.current = [];
            trigger([]).then();
        }
    }, [detached, unregister, trigger]);

    return (rules: ValidationRules = {}) => (ref: FieldElement<T> & Ref | null) => {
        if (!detached) {
            if (ref && !fieldNamesRef.current.includes(ref.name)) {
                fieldNamesRef.current.push(ref.name);
            }

            originalRegister(rules)(ref);
        }
    };
}
