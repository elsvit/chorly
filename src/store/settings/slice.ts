import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ELang } from '~/types/ILang';
import { IStateSettings } from './types';
// import { IUser } from '~/types/IUser';
import { EStateName } from '~/store';
// import { RootStateT } from '../store';
// import {
//   createGenericEntityAdapter,
//   createEntityReducers,
// } from '../helpers/entityAdapter';

const initialState: IStateSettings = {
  // role: ERole.admin,
  lang: null,
  isLangInitiating: true, // Change from null to true
  // users: usersAdapter.getInitialState(),
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
  },
});

// Export actions
export const {
  initLanguage,
  setLanguage,
  // setRole,
} = settingsSlice.actions;

// Export the adapter for use in selectors
// export { usersAdapter };
