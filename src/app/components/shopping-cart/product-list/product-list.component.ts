import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  productList: Product[]= [];

  //Dependency Injection
  constructor(
    private productService:ProductService){

  }
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      
    next:(resp) => {

      this.productList = resp;
    },
    error:(err)=> {
      console.log(err);
    },
    complete:()=> {}
  });
}
   
  }


