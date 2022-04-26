import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}
  products: any = [];
  ngOnInit(): void {
  this.productService.getAllProducts().subscribe(res=>{
    this.products=res;
  })
  }
  addToCart(product: any) {

    if (!this.cartService.itemInCart(product)) {
      product.qtyTotal = 1;
      this.cartService.addToCart(product); //add items in cart

    }
  }
}
