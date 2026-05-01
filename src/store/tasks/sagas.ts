import { PayloadAction } from '@reduxjs/toolkit';
import { call, put } from 'redux-saga/effects';

import { takeLatestWithFetchable } from '../helpers/fetchableHandler';
import {
  addTask,
  addTaskSuccess,
  removeTask,
  removeTaskSuccess,
  updateTask,
  updateTaskSuccess,
} from './slice';
import { AddTasksPayload, RemoveTasksPayload, UpdateTasksPayload } from './types';

function* addTasksSaga(action: PayloadAction<AddTasksPayload>) {
  const { entity, onSuccess } = action.payload;

  // Immediately reflect entity in the store
  yield put(addTaskSuccess(entity));

  if (onSuccess) {
    yield call(onSuccess);
  }
}

function* updateTasksSaga(action: PayloadAction<UpdateTasksPayload>) {
  const { entity, onSuccess } = action.payload;

  // Upsert task into the store
  yield put(updateTaskSuccess(entity));

  if (onSuccess) {
    yield call(onSuccess);
  }
}

function* removeTasksSaga(action: PayloadAction<RemoveTasksPayload>) {
  const { entity, onSuccess } = action.payload;

  // Remove task by id from the store
  yield put(removeTaskSuccess(entity));

  if (onSuccess) {
    yield call(onSuccess);
  }
}

export default [
  takeLatestWithFetchable(addTask, addTasksSaga),
  takeLatestWithFetchable(updateTask, updateTasksSaga),
  takeLatestWithFetchable(removeTask, removeTasksSaga),
];
