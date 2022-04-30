// react
import {
    useCallback,
    useEffect,
    useMemo, useRef,
    useState,
} from 'react';
// third-party
import { useDispatch, useSelector } from 'react-redux';
// application
import { Fn, ThunkActionFn, ThunkReturnType } from '~/store/types';
import { IRootState } from '~/store/root/rootTypes';

export function useAppAction<T extends Fn>(action: T): (...args: Parameters<T>) => (
    T extends ThunkActionFn ? ThunkReturnType<T> : ReturnType<T>
) {
    const dispatch = useDispatch();

    return useCallback((...args: Parameters<T>) => (
        dispatch(action(...args))
    ), []);
}

export function useAppSelector<T extends(state: IRootState) => any>(selector: T): ReturnType<T> {
    return useSelector(selector);
}

export function useMedia(query: string) {
    if (!process.browser) {
        return false;
    }

    const media = useMemo(() => window.matchMedia(query), [query]);
    const [state, setState] = useState(media.matches);

    useEffect(() => {
        const onChangeMedia = () => {
            setState(media.matches);
        };

        if (media.addEventListener) {
            media.addEventListener('change', onChangeMedia);
        } else {
            // noinspection JSDeprecatedSymbols
            media.addListener(onChangeMedia);
        }

        return () => {
            if (media.removeEventListener) {
                media.removeEventListener('change', onChangeMedia);
            } else {
                // noinspection JSDeprecatedSymbols
                media.removeListener(onChangeMedia);
            }
        };
    }, [media]);

    return state;
}

type AsyncActionFn = (...args: any[]) => Promise<any>;

export function useAsyncAction<T extends AsyncActionFn>(
    action: T,
    deps: any[] = [],
): [(...args: Parameters<T>) => void, boolean] {
    const [loading, setLoading] = useState(false);

    const run = useMemo(() => (...args: Parameters<T>) => {
        if (loading) {
            return;
        }

        setLoading(true);

        action(...args).then(() => {
            setLoading(false);
        });
    }, [loading, setLoading, ...deps]);

    return useMemo(() => [run, loading], [run, loading]);
}

export function useIsUnmountedRef() {
    const isUnmountedRef = useRef<boolean>(false);

    useEffect(() => {
        isUnmountedRef.current = false;

        return () => {
            isUnmountedRef.current = true;
        };
    }, []);

    return isUnmountedRef;
}
