import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'; // this will help us to trigger soomething and listen something
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();
  constructor() { }

  sendMsg(product: unknown){
    console.log(product);
    this.subject.next(product); //Triggering an event

  }

  getMsg(){
    return this.subject.asObservable();
  }
}
