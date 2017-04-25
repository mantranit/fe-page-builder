import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './components/app.component';
import { WidgetDetailComponent } from './components/widget-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    WidgetDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
