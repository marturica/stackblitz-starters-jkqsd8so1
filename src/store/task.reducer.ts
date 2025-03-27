import { Post } from '../models/post.model';
import { User } from '../models/user.model';
import { ActionTypes, Actions } from './task.actions';

export interface TaskState {
  user: User | null;
  posts: Post[] | null;
}

export const taskInitialState: TaskState = {
  user: null,
  posts: null,
};

export function taskReducer(
  state: TaskState = taskInitialState,
  action: Actions
) {
  switch (action.type) {
    case ActionTypes.LoadUserDataSuccess:
      return {
        ...state,
        user: action.user,
      };
    case ActionTypes.LoadPostsSuccess:
      return {
        ...state,
        posts: action.response,
      };
    default:
      return state;
  }
}
