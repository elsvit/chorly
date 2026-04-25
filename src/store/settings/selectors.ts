// import { createSelector } from 'reselect';
import type { RootStateT } from '~/store';
import { EStateName } from '~/store/types';
import type { IStateSettings } from './types';

export const getSettingsState = (state: RootStateT) => state[EStateName.settings];

export const selectLang = (state: RootStateT) =>
  (state[EStateName.settings] as Persisted<IStateSettings>).lang;

export const selectIsLangInitiating = (state: RootStateT) =>
  (state[EStateName.settings] as Persisted<IStateSettings>).isLangInitiating;
