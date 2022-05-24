import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidenav =new EventEmitter
 public searchstat:boolean=false;
 cartList:any=[];
  constructor(public cartService:CartService) {}

  ngOnInit(): void {
    console.log(this.cartService.cartitems$);

    this.cartService.cartitems$.subscribe((res)=>{

      this.cartList=res
      console.log(this.cartList);

    })
  }

}
