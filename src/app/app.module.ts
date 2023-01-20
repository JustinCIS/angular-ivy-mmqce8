import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { OverviewComponent } from './components/overview/overview.component';
import { RestockComponent } from './components/restock/restock.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    WithdrawComponent,
    RestockComponent,
    OverviewComponent,
    LandingComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
