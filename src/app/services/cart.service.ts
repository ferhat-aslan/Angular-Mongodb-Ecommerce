import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, pluck, tap } from 'rxjs';
import { Cart } from '../models/cart';
import { AppState } from '../store/Reducers';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartList: Cart[] = [];
  totalprice:number=0;
  constructor(private store:Store<AppState>) {}
  addToCart(addeditem: Cart) {
    console.log(this.cartList);

    this.cartList.push(addeditem);
   this.total();
  }
  getItems() {
    return this.cartList;
  }
  clearCart() {
    this.cartList = [];
  }
  removeItem(item: any) {
    const index = this.cartList.findIndex((ax: any) => ax.id === item.id);
    if (index > -1) {
      this.cartList.splice(index, 1);
    }
  }
 total() {
   this.totalprice=0;
  this.cartList.map((item:any)=>{
    this.totalprice=(item.price*item.qtyTotal)+this.totalprice
  })
  }

  changeSubtotal(item: any, index: any) {
    const qty = item.qtyTotal;
    const amt = item.price;
    const subTotal = amt * qty;
  }
  itemInCart(item: any): boolean {
    return this.cartList.findIndex((o: any) => o.id === item.id) > -1;
  }
  /////////////////////////////////////////
  cartitems$=this.store.select("carts").pipe(tap((action: any) => console.log(action)))
  //cartCount$:Observable<number> =this.cartitems$.pipe(map((b)=>b.length));

}
