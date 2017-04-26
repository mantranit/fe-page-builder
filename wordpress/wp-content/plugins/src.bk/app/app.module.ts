import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }           from './components/app.component';
import { DashboardComponent }     from './components/dashboard.component';
import { RowsComponent }       from './components/rows.component';
import { WidgetsComponent }       from './components/widgets.component';
import { WidgetDetailComponent }  from './components/widget-detail.component';

import { WidgetService }          from './services/widget.service';
import { RowService }          from './services/row.service';
import { ColumnService }          from './services/column.service';

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
    RowsComponent,
    WidgetsComponent,
    WidgetDetailComponent
  ],
  providers: [
    RowService,
    WidgetService,
    ColumnService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
