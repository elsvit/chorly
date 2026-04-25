import { createSelector } from 'reselect';
import { RootStateT } from '~/store';
import { childrenAdapter } from './slice';

// Base selectors
export const getChildrenState = (state: RootStateT) => state.children;

// Adapter selectors
export const {
  selectAll: selectAllChildren,
  selectById: selectChildById,
  selectIds: selectChildIds,
  selectEntities: selectChildEntities ,
  selectTotal: selectTotalChildren,
} = childrenAdapter.getSelectors((state: RootStateT) => state.children);
