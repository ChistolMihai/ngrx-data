import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubDataService } from '../store/entity/github-data.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {
  githubUsers$: Observable<any>;
  constructor(private readonly GithubDataService: GithubDataService) { }

  ngOnInit(): void {
    this.githubUsers$ = this.GithubDataService.getAll();
  }
}
