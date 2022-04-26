import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartList: any = [];
  totalprice:number=0;
  constructor() {}
  addToCart(addeditem: any) {
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
}
