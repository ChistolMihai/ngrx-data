import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityDataService } from '@ngrx/data';
import { GithubDataService } from './entity/github-data.service';

@NgModule({
  declarations: [],
  providers: [GithubDataService],
  imports: [CommonModule]
})
export class EntityStoreModule {
  constructor(
    entityDataService: EntityDataService,
    GithubDataService: GithubDataService
  ) {
    entityDataService.registerService('Github', GithubDataService);
  }
}
