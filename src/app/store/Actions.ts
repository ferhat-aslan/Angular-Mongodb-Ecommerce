import { createAction, props } from '@ngrx/store';
import { Cart } from '../models/cart';

export const getCart=createAction('[Cart Service] getCart')
export const addCart = createAction('[Cart Service] AddCart',
props<{cart: Cart}>());
export const remCart = createAction('[Cart Service] remCart',
props<{id:number}>());
export const clearCart = createAction('[Cart Service] clearCart');
