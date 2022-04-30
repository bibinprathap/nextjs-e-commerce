// application
import { QUICKVIEW_NAMESPACE } from '~/store/quickview/quickviewReducer';
import { quickviewClose, quickviewOpen } from '~/store/quickview/quickviewActions';
import { useAppAction, useAppSelector } from '~/store/hooks';

export const useQuickview = () => useAppSelector((state) => state[QUICKVIEW_NAMESPACE]);

export const useQuickviewOpen = () => useAppAction(quickviewOpen);

export const useQuickviewClose = () => useAppAction(quickviewClose);
