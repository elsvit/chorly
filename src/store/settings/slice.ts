import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ELang } from '~/types/ELang';
import type{ IStateSettings } from './types';
import { EStateName } from '~/store/enums';

const initialState: IStateSettings = {
  lang: null,
  isLangInitiating: true, // TODO Change from null to true
  isRecurringTabSeparated: true,
};

export const settingsSlice = createSlice({
  name: EStateName.settings,
  initialState,
  reducers: {
    initLanguage: state => {
      state.isLangInitiating = true;
    },
    setLanguage: (state, action: PayloadAction<ELang>) => {
      state.lang = action.payload;
      state.isLangInitiating = false; // Set to false when language is set
    },
    setIsRecurringTabSeparated: (state, action: PayloadAction<boolean>) => {
      state.isRecurringTabSeparated = action.payload;
    },
  },
});

// Export actions
export const {
  initLanguage,
  setLanguage,
  setIsRecurringTabSeparated,
} = settingsSlice.actions;

