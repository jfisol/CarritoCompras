import { Component, OnInit } from '@angular/core';
import { Cart } from '../interfaces/Icart.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
 cart!: Cart[];

ngOnInit(): void {
  this.cart= JSON.parse(localStorage.getItem('cart')!);
}

}
