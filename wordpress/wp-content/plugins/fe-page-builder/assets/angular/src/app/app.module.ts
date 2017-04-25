import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }           from './components/app.component';
import { DashboardComponent }     from './components/dashboard.component';
import { WidgetsComponent }       from './components/widgets.component';
import { WidgetDetailComponent }  from './components/widget-detail.component';

import { WidgetService }          from './services/widget.service';

import { AppRoutingModule }       from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    WidgetsComponent,
    WidgetDetailComponent
  ],
  providers: [ WidgetService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
