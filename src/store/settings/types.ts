import { ELang } from '~/types/ILang';

// export enum ERole {
//   admin = 'admin',
//   parent = 'parent',
// }

export interface IStateSettings {
  // role: ERole;
  lang: ELang | null;
  isLangInitiating: boolean | null;
}
