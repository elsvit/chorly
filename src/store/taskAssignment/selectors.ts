import { RootStateT } from '~/store';
import { taskAssignmentAdapter } from './slice';

// Base selectors
export const getTaskAssignmentState = (state: RootStateT) => state.taskAssignment;

// Adapter selectors
export const {
  selectAll: selectAllTaskAssignment,
  selectById: selectTaskAssignmentById,
  selectIds: selectTaskAssignmentIds,
  selectEntities: selectTaskAssignmentEntities,
  selectTotal: selectTotalTaskAssignment,
} = taskAssignmentAdapter.getSelectors((state: RootStateT) => state.taskAssignment);
