import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pluck } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getAllProducts():Observable<unknown>{
    return this.http.get<unknown>("https://dummyjson.com/products").pipe(pluck("products"))
  //http://localhost:3000/products pluck gerek yok
  }
}
