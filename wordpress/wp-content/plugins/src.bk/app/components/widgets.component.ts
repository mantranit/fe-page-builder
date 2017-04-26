import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Widget } from './../models/widget';
import { WidgetService } from './../services/widget.service';

@Component({
  selector: 'my-widgets',
  templateUrl: './../../templates/widgets.component.html',
  styleUrls: [ './../../styles/widgets.component.css' ]
})
export class WidgetsComponent implements OnInit {
  widgets: Widget[];
  selectedWidget: Widget;

  constructor(
    private router: Router,
    private widgetService: WidgetService) { }

  getWidgets(): void {
    this.widgetService.getWidgets().then(widgets => this.widgets = widgets);
  }

  ngOnInit(): void {
    this.getWidgets();
  }

  onSelect(widget: Widget): void {
    this.selectedWidget = widget;
  }

  gotoDetail(): void {
    this.router.navigate(['/widget', this.selectedWidget.id]);
  }
}
