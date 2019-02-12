import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Array<any> = [];

  ngOnInit() {
    fetch('https://efa-gardenapp-backend.herokuapp.com/api/product')
      .then(response => response.json())
      .then(json => this.products = json)
  }
}
