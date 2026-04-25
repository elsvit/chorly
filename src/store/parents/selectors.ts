import { createSelector } from 'reselect';
import { RootStateT } from '~/store';
import { parentsAdapter } from './slice';

// Base selectors
export const getParentsState = (state: RootStateT) => state.parents;

// Adapter selectors
export const {
  selectAll: selectAllParents,
  selectById: selectParentById,
  selectIds: selectParentIds,
  selectEntities: selectParentEntities,
  selectTotal: selectTotalParents,
} = parentsAdapter.getSelectors((state: RootStateT) => state.parents);
