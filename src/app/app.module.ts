import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './components/header/header.component';
import {ProductsComponent} from './components/products/products.component';
import {BasketComponent} from './components/basket/basket.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MainComponent} from './components/main/main.component';
import {AppRoutingModule} from './app-routing.module';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from "@angular/common/http";
import {LoginPageComponent} from './components/login-page/login-page.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./services/auth.service";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ProductsComponent,
        BasketComponent,
        MainComponent,
        LoginPageComponent,
        RegistrationComponent,

    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        AppRoutingModule,
        MatCardModule,
        HttpClientModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    exports: [HttpClientModule],
    providers: [[AuthService], [BasketComponent]],
    bootstrap: [AppComponent]
})
export class AppModule {
}
