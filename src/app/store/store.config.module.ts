import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { entityConfig } from './entity-metadata';
import { metaReducers } from 'src/app/store/_config';
import { PostsReducer } from './reducers/posts.reducer';
import { authReducer } from './reducers/auth.reducer';
import { PostEffects } from './effects/post.effects';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'http://localhost:3000/',
  getDelay: 1000
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      post: PostsReducer,
      auth: authReducer
    }, { metaReducers }),
    EffectsModule.forRoot([
      PostEffects
    ]),

    // should be last
    EntityDataModule.forRoot(entityConfig),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }
  ]
})
export class StoreConfigModule { }
