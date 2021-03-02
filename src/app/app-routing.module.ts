import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './main/users/users.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'posts',
    loadChildren: () =>
      import('./main/posts/posts.module').then((m) => m.PostsModule),
  },
  { path: 'users', component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
