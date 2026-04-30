import { ELang } from '~/types/ILang';

export enum ERole {
  admin = 'admin',
  parent = 'parent',
}

export interface IStateSettings {
  lang: ELang | null;
  isLangInitiating: boolean | null;
  isRecurringTabSeparated: boolean;
}
