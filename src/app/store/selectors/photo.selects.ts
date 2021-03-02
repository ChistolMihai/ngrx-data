import { PhotoState } from '../reducers/photo.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getPhotoFeature = createFeatureSelector('photo');

export const getPhotos = createSelector(
  getPhotoFeature,
  (state: PhotoState) => state.photos
);
