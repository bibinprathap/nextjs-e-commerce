// react
import React from 'react';

export const LanguageLocaleContext = React.createContext<string>('');

export const LanguageSetLocaleContext = React.createContext<(locale: string) => void>(() => {});
