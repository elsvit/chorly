// import { createSelector } from 'reselect';
import { RootStateT } from '~/store';
import { tasksAdapter } from './slice';

// Base selectors
export const getTasksState = (state: RootStateT) => state.tasks;

// Adapter selectors
export const {
  selectAll: selectAllTasks,
  selectById: selectTaskById,
  selectIds: selectTaskIds,
  selectEntities: selectTaskEntities,
  selectTotal: selectTotalTasks,
} = tasksAdapter.getSelectors((state: RootStateT) => state.tasks );
