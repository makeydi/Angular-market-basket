import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {ProductsComponent} from "./components/products/products.component";
import {BasketComponent} from "./components/basket/basket.component";

const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'basket', component: BasketComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
