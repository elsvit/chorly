import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITaskBase } from '~/types/ITask';
import { EStateName } from '~/store/enums';
import {
  createEntityReducers,
  createGenericEntityAdapter,
} from '~/store/helpers';
import {
  AddTaskBasePayload,
  IStateTaskBase,
  RemoveTaskBasePayload,
  UpdateTaskBasePayload,
} from './types';

export const taskBaseAdapter = createGenericEntityAdapter<ITaskBase>();

const initialState: IStateTaskBase = {
  ...taskBaseAdapter.getInitialState(),
};

const entityReducers = createEntityReducers(taskBaseAdapter);

export const taskBaseSlice = createSlice({
  name: EStateName.taskBase,
  initialState,
  reducers: {
    addTaskBase: (state, action: PayloadAction<AddTaskBasePayload>) => {
      entityReducers.addEntity(state, action as unknown as PayloadAction<{ entity: ITaskBase; isUpsert?: boolean }>);
    },
    addTaskBaseSuccess: (state, action: PayloadAction<ITaskBase>) => {
      entityReducers.addEntity(state, {
        ...action,
        payload: { entity: action.payload },
      } as unknown as PayloadAction<{ entity: ITaskBase; isUpsert?: boolean }>);
    },
    updateTaskBase: (state, action: PayloadAction<UpdateTaskBasePayload>) => {
      entityReducers.upsertEntity(
        state,
        { ...action, payload: action.payload.entity } as unknown as PayloadAction<ITaskBase>
      );
    },
    updateTaskBaseSuccess: (state, action: PayloadAction<ITaskBase>) => {
      entityReducers.upsertEntity(state, action as unknown as PayloadAction<ITaskBase>);
    },
    removeTaskBase: (state, action: PayloadAction<RemoveTaskBasePayload>) => {
      entityReducers.removeEntity(
        state,
        { ...action, payload: action.payload.entity } as unknown as PayloadAction<string>
      );
    },
    removeTaskBaseSuccess: (state, action: PayloadAction<string>) => {
      entityReducers.removeEntity(state, action as unknown as PayloadAction<string>);
    },
    clearTaskBase: state => {
      entityReducers.clearEntities(state);
    },
  },
});

export const {
  addTaskBase,
  addTaskBaseSuccess,
  updateTaskBase,
  updateTaskBaseSuccess,
  removeTaskBase,
  removeTaskBaseSuccess,
  clearTaskBase,
} = taskBaseSlice.actions;
