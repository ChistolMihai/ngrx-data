import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  PostActionTypes,
  GetPostsAction,
  GetPostsSuccessAction,
  GetPostsFailAction,
  DeletePostAction,
  DeletePostSuccessAction,
  DeletePostFailAction,
  AddPostAction,
  AddPostSuccessAction,
  AddPostFailAction
} from '../actions/posts.actions'
import { PostsService } from '../services/posts.service';

@Injectable()
export class PostEffects {

  constructor(
    private actions$: Actions,
    private service: PostsService
  ) { }

  public getPosts$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType<GetPostsAction>(PostActionTypes.GET_POSTS),
        mergeMap(
          () => this.service.getPosts()
            .pipe(
              map(data => {
                return new GetPostsSuccessAction(data)
              }),
              catchError(error => of(new GetPostsFailAction(error)))
            )
        ),
      )
  );

  public deletePost$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType<DeletePostAction>(PostActionTypes.DELETE_POST),
        mergeMap(
          (data) => this.service.deletePost(data.payload)
            .pipe(
              map(data2 => {
                return new DeletePostSuccessAction(data.payload)
              }),
              catchError(error => of(new DeletePostFailAction(error)))
            )
        ),
      )
  )

  addPost$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType<AddPostAction>(PostActionTypes.ADD_POST),
        mergeMap(
          (data) => this.service.addPost(data.payload)
            .pipe(
              map(data2 => {
                return new AddPostSuccessAction(data.payload)
              }),
              catchError(error => of(new AddPostFailAction(error)))
            )
        ),
      )
  )
}
