import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {AboutPageComponent} from "./components/about-page/about-page.component";
import {LookBookComponent} from "./components/look-book/look-book.component";
import {ShopPageComponent} from "./components/shop-page/shop-page.component";
import {SizeConstructorComponent} from "./components/shop-page/size-constructor/size-constructor.component";


const routes: Routes = [
  {path:'', component:MainPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'look-book', component: LookBookComponent},
  {path: 'shop', component: ShopPageComponent, children:[
      {path:'size-constructor', component: SizeConstructorComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
