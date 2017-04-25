import { Component, OnInit } from '@angular/core';

import { Widget } from './../models/widget';
import { WidgetService } from './../services/widget.service';

@Component({
  selector: 'my-app',
  templateUrl: './../../templates/app.component.html',
  styleUrls: [ './../../styles/app.component.css' ],
  providers: [WidgetService]
})
export class AppComponent implements OnInit {
  title = 'Tour of Widgets';
  widgets: Widget[];
  selectedWidget: Widget;

  constructor(private widgetService: WidgetService) { }

  getWidgets(): void {
    this.widgetService.getWidgets().then(widgets => this.widgets = widgets);
  }

  ngOnInit(): void {
    this.getWidgets();
  }

  onSelect(widget: Widget): void {
    this.selectedWidget = widget;
  }
}
