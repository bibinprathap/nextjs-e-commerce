/* eslint-disable import/prefer-default-export */

// application
import { OPTIONS_NAMESPACE } from '~/store/options/optionsReducer';
import { useAppSelector } from '~/store/hooks';

export const useOptions = () => useAppSelector((state) => state[OPTIONS_NAMESPACE]);
