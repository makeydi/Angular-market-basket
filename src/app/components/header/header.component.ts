import {Component, OnInit} from '@angular/core';
import {BasketComponent} from "../basket/basket.component";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

    quantityElements: number

    constructor() {
    }

    ngOnInit(): void {
        this.quantityElements = BasketComponent.prototype.totalQuantity
    }
}