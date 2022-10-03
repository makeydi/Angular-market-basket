import {Component, OnInit} from '@angular/core';
import {BasketComponent} from "../basket/basket.component";
import {AuthService} from "../../services/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

    checkToken: any

    constructor(public auth: AuthService, public basket: BasketComponent) {
    }

    ngOnInit(): void {
    }
}