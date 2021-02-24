import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubService } from '../store/github/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {
githubUsers$: Observable<any>;
  constructor(private readonly githubService: GithubService) { }

  ngOnInit(): void {
    this.githubUsers$ = this.githubService.getAll();
  }

}
