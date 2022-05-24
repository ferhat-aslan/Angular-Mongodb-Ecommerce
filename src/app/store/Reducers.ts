import { createReducer,on } from "@ngrx/store";
import { Cart } from "../models/cart";
import { getCart,addCart,remCart,clearCart } from "./Actions";

export const appFeatureKey ='app';

export interface AppState {
  carts:Cart[];
}
export const initState:AppState ={
  carts: []
}
export const CartReducer =createReducer(
  initState,
  on(getCart,state=>state),
  on(addCart,(state,{cart})=>{
    return {
      carts:[...state.carts,cart]
    }
  }),
  on(remCart,(state,{id})=>{
    return {
      carts:state.carts.filter(carts=>{
        carts.id!=id
      })
    }
    }),
    on(clearCart,(state=>{
      return{
        carts:[]      }
    }))
)
