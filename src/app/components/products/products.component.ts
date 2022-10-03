import {Component, OnInit} from '@angular/core';
import {IProducts} from "../../models/product";
import {Subscription} from "rxjs";
import {ProductService} from "../../services/service.service";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

    products: IProducts[];
    productsSubscription: Subscription;
    basket: IProducts[];
    basketSubscription: Subscription;

    constructor(private productService: ProductService) {
    }

    ngOnInit(): void {
        this.productsSubscription = this.productService.getProducts().subscribe((data) => {
            this.products = data;
        })
        this.basketSubscription = this.productService.getProductFromBasket().subscribe((data) => {
            this.basket = data
        })
    }

    addToBasket(product: IProducts) {
        product.quantity = 1;
        let findItem;
        if (this.basket.length > 0) {
            findItem = this.basket.find((item) => item.id === product.id)
            if (findItem) this.updateToBasket(findItem)
            else this.postToBasket(product)
        } else this.postToBasket(product)
    }

    postToBasket(product: IProducts) {
        this.productService.postProductToBasket(product).subscribe((data) => this.basket.push(data))
    }

    updateToBasket(product: IProducts) {
        product.quantity += 1;
        this.productService.updateProductToBasket(product).subscribe(() => {
        })
    }

    ngOnDestroy() {
        if (this.productsSubscription) this.productsSubscription.unsubscribe()
        if (this.basketSubscription) this.basketSubscription.unsubscribe()
    }
}
