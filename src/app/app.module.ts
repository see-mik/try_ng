import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { MatDialogModule } from "@angular/material/dialog";
import { CartModalComponent } from "./components/cart-modal/cart-modal.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CartButtonComponent } from "./components/cart-modal/cart-button.component";
import { CartItemComponent } from "./components/cart-item/cart-item.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CartModalComponent,
    CartButtonComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
