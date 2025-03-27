import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskState } from './task.reducer';

export const TASK_STORE_NAME = 'taskStore';

export const selectTaskState =
  createFeatureSelector<TaskState>(TASK_STORE_NAME);

export const selectUser = createSelector(
  selectTaskState,
  (state) => state.user
);

export const selectPosts = createSelector(
  selectTaskState,
  (state) => state.posts
);
