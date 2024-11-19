import { Component, Input } from '@angular/core';
import { Product } from '../interfaces/Iproduct.interface';
import { Cart } from '../interfaces/Icart.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
@Input() product!: Product;
cart:Cart[]=[];//hay que tiparlo con una interface

constructor(){

}
add(){
  //localStorage.setItem('cart',JSON.stringify(this.product));
  this.cart = JSON.parse(localStorage.getItem('cart')!);//recuperar lo que esta en local storage
  this.cart.push({name:this.product.name,price:this.product.price,quantity:1 });
  localStorage.setItem('cart',JSON.stringify(this.cart));
}
}
