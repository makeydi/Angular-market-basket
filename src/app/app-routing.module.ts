import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {ProductsComponent} from "./components/products/products.component";
import {BasketComponent} from "./components/basket/basket.component";
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {AuthService} from "./services/auth.service";

const routes: Routes = [
    {path: 'basket', component: BasketComponent},
    {path: 'log-in', component: LoginPageComponent, children: [{path: 'basket', component: BasketComponent}]},
    {path: '', component: MainComponent},
    {path: 'products', component: ProductsComponent},
    {
        path: 'registration', component: RegistrationComponent,
        children: [{
            path: 'log-in', component: LoginPageComponent,
            children: [{path: 'basket', component: BasketComponent}]
        },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthService]
})
export class AppRoutingModule {
}
