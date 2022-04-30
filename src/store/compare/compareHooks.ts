// application
import { COMPARE_NAMESPACE } from '~/store/compare/compareReducer';
import { compareAddItem, compareClear, compareRemoveItem } from '~/store/compare/compareActions';
import { useAppAction, useAppSelector } from '~/store/hooks';

export const useCompare = () => useAppSelector((state) => state[COMPARE_NAMESPACE]);

export const useCompareAddItem = () => useAppAction(compareAddItem);

export const useCompareRemoveItem = () => useAppAction(compareRemoveItem);

export const useCompareClear = () => useAppAction(compareClear);
