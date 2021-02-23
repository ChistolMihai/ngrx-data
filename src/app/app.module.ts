import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routes';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts/posts.component';
import { AddPostComponent } from './components/posts/add-post/add-post.component';
import { DeletePostComponent } from './components/posts/delete-post/delete-post.component';
import { StoreConfigModule } from './store/store.config.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    AddPostComponent,
    DeletePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreConfigModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
