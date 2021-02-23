import { Injectable } from '@angular/core';

import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { IProduct } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends EntityCollectionServiceBase<IProduct> {
  constructor(
    productsDataSevice: EntityCollectionServiceElementsFactory
  ) {
    super('Product', productsDataSevice);
  }
}
