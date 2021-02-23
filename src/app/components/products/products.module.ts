import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list.component';
import { ProductDataService } from 'src/app/store/entity/product-data.service';
import { EntityDataService } from '@ngrx/data';


@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  providers: [ProductDataService]
})
export class ProductsModule {
  constructor(
    entityDataService: EntityDataService,
    productDataService: ProductDataService,
  ) {
    entityDataService.registerService('Product', productDataService);
  }
}
