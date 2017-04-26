import { Component, OnInit } from '@angular/core';

import { Widget } from './../models/widget';
import { WidgetService } from './../services/widget.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './../../templates/dashboard.component.html',
  styleUrls: [ './../../styles/dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  rows: Row[] = [];
  widgets: Widget[] = [];

  constructor(
      private widgetService: WidgetService
  ) { }

  ngOnInit(): void {
    this.widgetService.getWidgets()
        .then(widgets => this.widgets = widgets.slice(1, 5));
  }
}
