import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as actions from './task.actions';
import { switchMap, map } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { Post } from '../models/post.model';
import { User } from '../models/user.model';

@Injectable()
export class TaskEffects {
  loadUserData$: Observable<any> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.ActionTypes.LoadUserData),
      switchMap((action: actions.LoadUserData) => {
        return this.userService
          .getUserDetails(action.userId)
          .pipe(map((user: User) => new actions.LoadUserDataSuccess(user)));
      })
    )
  );

  saveUserData$: Observable<any> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.ActionTypes.SaveUserData),
      switchMap((action: actions.SaveUserData) => {
        return this.userService.saveUserDetails(action.user).pipe(
          map((user: User) => {
            return new actions.SaveUserDataSuccess(user);
          })
        );
      })
    )
  );

  loadPosts$: Observable<any> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.ActionTypes.LoadPosts),
      switchMap((action: actions.LoadPosts) => {
        return this.userService.getPosts().pipe(
          map((response: Post[]) => {
            return new actions.LoadPostsSuccess(response);
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
