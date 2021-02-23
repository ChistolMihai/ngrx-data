import { HttpClientModule } from '@angular/common/http';
import { environment } from './../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EffectsModule } from '@ngrx/effects';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import {
  effects,
  entityConfig,
  metaReducers,
  reducers,
  defaultDataServiceConfig
} from './store';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter.component';
import { UsersComponent } from './users/users.component';
import { CommentComponent } from './comment/comment.component';
import { PostsComponent } from './components/posts/posts.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CounterComponent,
    UsersComponent,
    PostsComponent,
    CommentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    EntityDataModule.forRoot(entityConfig),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
