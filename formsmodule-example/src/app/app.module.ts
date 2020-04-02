import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { LessThanOrEqualDirective } from './lte.validator.directive'
import { FiscalCodeDirective } from './fiscalcode.validator.directive'

@NgModule({
  declarations: [
    AppComponent,
    LessThanOrEqualDirective,
    FiscalCodeDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
