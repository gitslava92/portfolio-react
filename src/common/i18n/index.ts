import { InitOptions, Namespace, TFunction } from 'i18next';
import { UseTranslationResponse, useTranslation } from 'react-i18next';

import { en } from './en';
import { ru } from './ru';

export enum LangTitle {
  Eng = 'en',
  Rus = 'ru'
}

export interface Languages {
  id: string;
  title: string;
}

export const languages = [
  {id: LangTitle.Eng, title: 'eng' },
  {id: LangTitle.Rus, title: 'рус' },
];

export const i18nInitConfig: InitOptions = {
  // the translations
  // (tip move them in a JSON file and import them,
  // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
  resources: {
    ...en,
    ...ru,
  },
  lng: LangTitle.Rus, // if you're using a language detector, do not define the lng option
  fallbackLng: LangTitle.Rus,

  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
};

export const capitalize = (str: string) =>
  str[0].toUpperCase() + str.slice(1, str.length);

export const capitalizeAll = (str: string, sep = ' ') =>
  str
    .split(sep)
    .map((s) => capitalize(s))
    .join(sep);

export interface UseCustomTranslationResponse<Ns extends Namespace, KPrefix>
  extends UseTranslationResponse<Ns, KPrefix> {
  t: TFunction<Ns, KPrefix>;
  tc: (msg: string) => string;
  tca: (msg: string, sep?: string) => string;
}

/*
  Custom translation hook wrapper for comfortable work with
  text control: capitalize, capitalizeAll, toUpperCase, etc.

  Short names:
  t - translate,
  tc - translate and capitalize,
  tca translate and capitalize all
 */
export const useCustomTranslation = (): UseCustomTranslationResponse<
  'translation',
  undefined
> => {
  const { t } = useTranslation();

  return {
    t,
    tc: (msg: string) => capitalize(t(msg)),
    tca: (msg: string, sep?: string) => capitalizeAll(t(msg), sep),
  } as UseCustomTranslationResponse<'translation', undefined>;
};
