import { EntityState } from '@reduxjs/toolkit';
import { ITask } from '~/types/ITask';

export interface IStateTasks extends EntityState<ITask, string> {}

export type AddTasksPayload = {
  entity: ITask;
  onSuccess?: () => void;
};

export type UpdateTasksPayload = AddTasksPayload;

export type RemoveTasksPayload = {
  entity: string;
  onSuccess?: () => void;
};
