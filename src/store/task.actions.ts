import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user.model';
import { Post } from '../models/post.model';

export enum ActionTypes {
  LoadUserData = '[USER API] Load user data',
  LoadUserDataSuccess = '[USER API] Load user data success',
  LoadUserDataFailure = '[USER API] Load user data failure',
  SaveUserData = '[USER API] Save user data',
  SaveUserDataSuccess = '[USER API] Save user data success',
  SaveUserDataFailure = '[USER API] Save user data failure',
  LoadPosts = '[USER API] Load posts',
  LoadPostsSuccess = '[USER API] Load posts success',
  LoadPostsFailure = '[USER API] Load posts failure',
}

export class LoadUserData implements Action {
  readonly type = ActionTypes.LoadUserData;
  constructor(public userId: number) {}
}

export class LoadUserDataSuccess implements Action {
  readonly type = ActionTypes.LoadUserDataSuccess;
  constructor(public user: User) {}
}

export class LoadUserDataFailure implements Action {
  readonly type = ActionTypes.LoadUserDataFailure;
  constructor(public error: HttpErrorResponse) {}
}

export class SaveUserData implements Action {
  readonly type = ActionTypes.SaveUserData;
  constructor(public user: User) {}
}

export class SaveUserDataSuccess implements Action {
  readonly type = ActionTypes.SaveUserDataSuccess;
  constructor(public user: User) {}
}

export class SaveUserDataFailure implements Action {
  readonly type = ActionTypes.SaveUserDataFailure;
  constructor(public error: HttpErrorResponse) {}
}

export class LoadPosts implements Action {
  readonly type = ActionTypes.LoadPosts;
}

export class LoadPostsSuccess implements Action {
  readonly type = ActionTypes.LoadPostsSuccess;
  constructor(public response: Post[]) {}
}

export class LoadPostsFailure implements Action {
  readonly type = ActionTypes.LoadPostsFailure;
  constructor(public error: HttpErrorResponse) {}
}

export type Actions =
  | LoadUserData
  | LoadUserDataSuccess
  | LoadUserDataFailure
  | LoadPosts
  | LoadPostsSuccess
  | LoadPostsFailure;
