import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs/observable/from';
import { Product } from '../product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private _productService) { }

  ngOnInit() {
    this._productService.getProducts().subscribe(response => this.products = response);
  }

}
