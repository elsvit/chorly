import { RootStateT } from '~/store';
import { taskBaseAdapter } from './slice';

// Base selectors
export const getTaskBaseState = (state: RootStateT) => state.taskBase;

// Adapter selectors
export const {
  selectAll: selectAllTaskBase,
  selectById: selectTaskBaseById,
  selectIds: selectTaskBaseIds,
  selectEntities: selectTaskBaseEntities,
  selectTotal: selectTotalTaskBase,
} = taskBaseAdapter.getSelectors((state: RootStateT) => state.taskBase);
