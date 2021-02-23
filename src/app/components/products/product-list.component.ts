import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/store/models/product.model';
import { ProductsService } from 'src/app/store/services/products/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public productList$: Observable<IProduct[]>;
  public loading$: Observable<boolean>;

  constructor(private productApi: ProductsService) {
    this.productList$ = this.productApi.entities$;
    this.loading$ = this.productApi.loading$;
  }

  ngOnInit(): void {
    this.getProducts()
  }

  public getProducts() {
    this.productApi.getAll()
  }

}
