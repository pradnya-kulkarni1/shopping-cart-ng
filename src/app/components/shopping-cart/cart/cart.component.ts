import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../../../services/messenger.service';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  productName: string = '';
  qty?: number = 0;
  price1?: number;
  productId?: number;
  
  cartItems: Product[]= [];
  
  cartTotal = 0;
  product: any;

  constructor (private msg:MessengerService){

  }
  ngOnInit(): void {
      this.msg.getMsg().subscribe({
      
      next:(parms) => {

      this.product = parms;
    
      this.productName = this.product.name;
      console.log(this.product.description);
      this.product.qty = 1;
      this.productId = this.product.id;
      this.addProductToCart(this.product);
   
    },
  })
      
   
    }
    addProductToCart(product: Product){
      let productExists = false;

      
      for(let i in this.cartItems){
        if(this.cartItems[i].id=== product.id){
          this.cartItems[i].qty++;
          productExists = true;
          break;
        }}
      if(!productExists){
        this.cartItems.push(this.product);
     
       this.cartTotal=0;
       this.cartItems.forEach(item =>{
       this.cartTotal += (item.qty * item.price);
       })
      }
      
      this.cartTotal=0;
      this.cartItems.forEach(item =>{
      this.cartTotal += (item.qty * item.price);
        });
      }
     

    }


  
  

  
