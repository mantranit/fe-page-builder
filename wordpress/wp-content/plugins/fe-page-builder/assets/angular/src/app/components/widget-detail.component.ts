import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Widget }         from './../models/widget';
import { WidgetService }  from './../services/widget.service';
@Component({
  selector: 'widget-detail',
  templateUrl: './../../templates/widget-detail.component.html',
  styleUrls: [ './../../styles/widget-detail.component.css' ]
})
export class WidgetDetailComponent implements OnInit {
  widget: Widget;

  constructor(
      private widgetService: WidgetService,
      private route: ActivatedRoute,
      private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
        .switchMap((params: Params) => this.widgetService.getWidget(+params['id']))
        .subscribe(widget => this.widget = widget);
  }

  goBack(): void {
    this.location.back();
  }
}
