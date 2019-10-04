import { BrowserModule  } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { BasketListComponent } from './basket-list/basket-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ReceiptListComponent } from './receipt-list/receipt-list.component';
import { InputbasketComponent } from './inputbasket/inputbasket.component';

import {MaterialModule} from './material-module';

@NgModule({
  declarations: [
    AppComponent,
    BasketListComponent,
    TopBarComponent,
    ReceiptListComponent,
    InputbasketComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forRoot([
      {
        path: "",
        children: [{ path: "", component: BasketListComponent }]
      },
      {
        path: "",
        children: [{ path: "receipt", component: ReceiptListComponent }]
      },
      {
        path: "",
        children: [{ path: "inputbasket", component: InputbasketComponent }]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
