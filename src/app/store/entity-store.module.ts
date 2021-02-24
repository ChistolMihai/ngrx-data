import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityDataService } from '@ngrx/data';
import { CommentService } from './comment/comment.service';
import { GithubService } from './github/github.service';

@NgModule({
  declarations: [],
  providers: [CommentService, GithubService],
  imports: [CommonModule]
})
export class EntityStoreModule {
  constructor(
    entityDataService: EntityDataService,
    commentService: CommentService,
    githubService: GithubService
  ) {
    entityDataService.registerService('Comment', commentService);
    entityDataService.registerService('Github', githubService);
  }
}
