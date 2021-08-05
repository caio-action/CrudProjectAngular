import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:4200/products"
  constructor(private _snackBar: MatSnackBar , private http: HttpClient) { }


showMessage(msg: string): void {
  this._snackBar.open(msg,'DEU TUDO CERTO', {
    duration: 3000,
    horizontalPosition: "right",
    verticalPosition: "top"

  })
}

create(product: Product) : Observable<Product>{
  return this.http.post<Product>(this.baseUrl, product)
  }
}
