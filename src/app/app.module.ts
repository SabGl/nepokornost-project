import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import { AboutPageComponent } from './components/about-page/about-page.component';
import { LookBookComponent } from './components/look-book/look-book.component';
import {MatIconModule} from "@angular/material/icon";
import { ShopPageComponent } from './components/shop-page/shop-page.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import { SizeConstructorComponent } from './components/shop-page/size-constructor/size-constructor.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AboutPageComponent,
    LookBookComponent,
    ShopPageComponent,
    SizeConstructorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
