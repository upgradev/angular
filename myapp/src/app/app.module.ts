import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyFirstComponent } from './myfirst.component';
import { MySecoundComponent } from './my-secound/my-secound.component';
import { MyThirdComponent } from './my-secound/my-third/my-third.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    MySecoundComponent,
    MyThirdComponent
  ],
  imports: [
  BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
