import { Component, OnInit, OnDestroy } from '@angular/core';
import {IProducts} from "../../models/product";
import {Subscription} from "rxjs";
import {ProductService} from "../../services/service.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private ProductService: ProductService) { }
    basket: IProducts[]
    basketSubscription: Subscription;
    totalPrice: number;
    totalQuantity: number;

    ngOnInit(): void {
    this.basketSubscription = this.ProductService.getProductFromBasket().subscribe((data) =>{
      this.basket = data;
      this.totalPrice = 0;
      this.totalQuantity=0;
      this.totalQuantity = this.countTotalQuantity(data);
      this.totalPrice = this.countTotalPrice(data);

    })
  }

  ngOnDestroy(){
      if (this.basketSubscription) this.basketSubscription.unsubscribe();
  }

  minusItemFromBasket(item: IProducts) {
      if (item.quantity === 1) {
        this.ProductService.removeProductFromBasket(item.id).subscribe(() =>{
          let element = this.basket.findIndex((data) => data.id === item.id)
          this.basket.splice(element,1)
          this.totalPrice-=item.price;
        })
      } else { item.quantity -=1;
        this.ProductService.updateProductToBasket(item).subscribe((data) =>{})
        this.totalPrice -= item.price
      }
        return this.totalPrice
  }

  plusItemToBasket(item: IProducts){
    item.quantity +=1;
    if ((item.name === 'Snickers') && (item.quantity > 4)) { this.totalPrice += (Math.trunc(item.quantity/5)*item.price*3 + (item.quantity%5)*item.price + (0-Math.trunc(item.quantity/5))*item.price*4)}
    else this.totalPrice+= item.price;
    this.ProductService.updateProductToBasket(item).subscribe((data) =>{})
    return this.totalPrice
  }

  countTotalPrice(data:IProducts[]) {

    data.forEach((element)=>{
      this.totalPrice += element.price*element.quantity;
    })
    return this.totalPrice
  }

  countTotalQuantity(data: IProducts[]) {
      data.forEach((element) => {
        this.totalQuantity += element.quantity
      })
    return this.totalQuantity
  }
}

