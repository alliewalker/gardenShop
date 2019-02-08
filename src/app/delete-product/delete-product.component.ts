import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { DatabaseService } from '../services/database.product.service'


@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  useBtn = false;
  deleteProduct: FormGroup;
  product= [];

  constructor(private fb: FormBuilder, private dbService: DatabaseService) { 
    setTimeout(() => {
      this.useBtn = true;
    }, 3000);
  }

  ngOnInit() {
    this.deleteProduct = this.fb.group({
      product_name: new FormControl(),
      product_description: new FormControl(),
      product_price: new FormControl(),
      product_image: new FormControl(),
      userUid: new FormControl()
      
    })

    this.findProduct();
  }

  onDeleteProduct() : void {
    this.product.splice(this.deleteProduct.value)
  }

  findProduct() : void {
    this.dbService.getProducts().subscribe(Product => {
      this.product = Product;
      this.product.reverse();
    })
  }
}
