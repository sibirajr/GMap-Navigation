import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Components
import { GMapsComponent } from './gmaps/gmaps.component';

@NgModule({
  declarations: [AppComponent, GMapsComponent],
  imports: [BrowserModule, FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
