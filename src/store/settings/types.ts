import { ELang } from '~/types/ELang';

export interface IStateSettings {
  lang: ELang | null;
  isLangInitiating: boolean | null;
  isRecurringTabSeparated: boolean;
}
