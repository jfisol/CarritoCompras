import { Component, OnInit } from '@angular/core';
import { Product } from './interfaces/Iproduct.interface';
import { Cart } from './interfaces/Icart.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'shopping-cart';
  
  products: Product[];
  product = [
    {id: '01', name: 'Mascarilla',Descripcion:'Para prevenir enfermedades', precio: 15.00},
    {id: '02', name: 'Alcohol',Descripcion:'Para desinfectar', precio: 25.00},
    {id: '01', name: 'Mascarilla',Descripcion:'Para prevenir enfermedades', precio: 15.00},
    {id: '02', name: 'Alcohol',Descripcion:'Para desinfectar', precio: 25.00},
    {id: '01', name: 'Mascarilla',Descripcion:'Para prevenir enfermedades', precio: 15.00},
    {id: '02', name: 'Alcohol',Descripcion:'Para desinfectar', precio: 25.00},
  ];
  cart:Cart[] = [];
  show: boolean;
  constructor(){
    this.products =  [
      {id: 1, name: 'Mascarilla',Description:'Para prevenir enfermedades', price: 15.00,img:''},
      {id: 2, name: 'Alcohol',Description:'Para desinfectar', price: 25.00, img:''},
      {id: 3, name: 'Gasas',Description:'Para prevenir enfermedades', price: 15.00, img:''},
      {id: 4, name: 'Curas',Description:'Para desinfectar', price: 25.00,img:''},
      {id: 5, name: 'Gel',Description:'Para prevenir enfermedades', price: 15.00, img:''},
      {id: 6, name: 'Desinfectante',Description:'Para desinfectar', price: 25.00, img:''},
    ];

    localStorage.setItem('cart',JSON.stringify(this.cart));
    this.show=false;
  }
  toogleShow(){
    this.show = !this.show;
  }
  ngOnInit(): void {
    
  }
}
