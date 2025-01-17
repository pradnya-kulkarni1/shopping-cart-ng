import { Injectable } from '@angular/core';
import {Product} from '../models/product';
import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';

const URL = 'http://localhost:8080/api/products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  // products: Product[] = [
  //   new Product(1, 'Apple','Washington Apples. Sweet, Crisp',2.85,'../assets/Apple.jpg'),
  //   new Product(2, 'Banana','Dole Bananas',0.69,'../assets/Banana.jpg'),
  //   new Product(3, 'Grapes','Red Grapes',3.75,'../assets/RedGrapes.jpg'),
  //   new Product(4, 'Oranges','Florida Oranges, Sweet, Juicy',3.55,'../assets/Orange.jpg'),
  //   new Product(5, 'Broccoli','Broccoli Bunch',1.85,'../assets/Broccoli.jpg'),
  // ]

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts():Observable<Product[]>{
   
    return this.http.get<Product[]>(URL+'/');
  }
}
