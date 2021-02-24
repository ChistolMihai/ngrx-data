import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, DefaultDataServiceConfig, HttpUrlGenerator } from '@ngrx/data';
import { environment } from 'src/environments/environment';

const config: DefaultDataServiceConfig = {
  root: 'https://api.github.com/search/code?q=addClass+in%3afile+language%3ajs+repo%3ajquery/jquery' // change base url here
};

@Injectable({
  providedIn: 'root'
})
export class GithubService extends DefaultDataService<any> {

  constructor(
    protected http: HttpClient,
    protected httpUrlGenerator: HttpUrlGenerator) {
    super('Github', http, httpUrlGenerator, config)
  }

}
