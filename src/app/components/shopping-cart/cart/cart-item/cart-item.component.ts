import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../models/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent implements OnInit{

  @Input() cartItem: any;

  ngOnInit(): void {
   
  }

}
