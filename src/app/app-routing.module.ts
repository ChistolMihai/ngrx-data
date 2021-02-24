import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommentComponent } from './comment/comment.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { GithubComponent } from './github/github.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'posts',
    loadChildren: () =>
      import('./posts/posts.module').then((m) => m.PostsModule),
  },
  { path: 'users', component: UsersComponent },
  { path: 'post', component: PostsComponent },
  { path: 'comments', component: CommentComponent },
  { path: 'github', component: GithubComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
