import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { LoadPhotosSuccess, PhotoActionTypes } from '../actions/photo.actions';
import { PhotoService } from '../../shared/services/photo.service';

@Injectable()
export class PhotoEffects {
  @Effect()
  loadAll$ = this.actions$.pipe(
    ofType(PhotoActionTypes.LoadPhotos),
    switchMap(() =>
      this.photoService.getAll().pipe(
        map((result: any[]) => new LoadPhotosSuccess(result)),
        catchError(() => EMPTY)
      )
    )
  );
  constructor(
    private actions$: Actions,
    private readonly photoService: PhotoService
  ) {}
}
