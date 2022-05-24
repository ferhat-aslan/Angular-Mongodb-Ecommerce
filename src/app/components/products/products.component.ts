import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Cart } from '../../models/cart';
import { Store } from '@ngrx/store';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
  SwiperOptions,
} from 'swiper';
import { addCart, getCart } from 'src/app/store/Actions';

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
]);
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private store:Store
  ) {}
  products: any = [];
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((res) => {
      this.products = res;
      console.log(this.products);
    });
  }
  addToCart(product: any):void {

     // product.qtyTotal = 1;
    this.store.dispatch(addCart({cart:product as Cart}));



    /* if (!this.cartService.itemInCart(product)) {
      product.qtyTotal = 1;
      this.cartService.addToCart((product as Cart)); //add items in cart
    } */

  }
  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  };
}
