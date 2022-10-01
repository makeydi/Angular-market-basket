import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IProducts} from "../models/product";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    url: string = 'http://localhost:3000/products';
    urlBasket: string = 'http://localhost:3000/basket';

    constructor(private http: HttpClient) {
    }

    getProducts() {
        return this.http.get<IProducts[]>(this.url)
    }

    postProductToBasket(product: IProducts) {
        return this.http.post<IProducts>(this.urlBasket, product)
    }

    getProductFromBasket() {
        return this.http.get<IProducts[]>(this.urlBasket)
    }

    updateProductToBasket(product: IProducts) {
        return this.http.put<IProducts>(`${this.urlBasket}/${product.id}`, product)
    }

    removeProductFromBasket(id: number) {
        return this.http.delete<any>(`${this.urlBasket}/${id}`)
    }
}