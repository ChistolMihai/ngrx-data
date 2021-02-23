import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  DefaultDataService, DefaultDataServiceConfig,
  HttpUrlGenerator
} from '@ngrx/data';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProduct } from '../models/product.model';

@Injectable()
export class ProductDataService extends DefaultDataService<IProduct> {
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    defaultDataServiceConfig: DefaultDataServiceConfig
  ) {
    super('Product', http, httpUrlGenerator, defaultDataServiceConfig);
  }

  getAll(): Observable<IProduct[]> {
    return super.getAll()
      .pipe(
        map((response: IProduct[]) => {
          return response;
        })
      );
  }
}
