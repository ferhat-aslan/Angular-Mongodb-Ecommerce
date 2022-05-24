import { createFeatureSelector,createSelector } from "@ngrx/store";
import * as fromReducer from "./Reducers";

export const selectAppState =createFeatureSelector<fromReducer.AppState>(
  fromReducer.appFeatureKey
);
export const selectCarts=createSelector(
  selectAppState,(state:fromReducer.AppState)=>state.carts
)
