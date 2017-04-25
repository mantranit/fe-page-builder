import { Component, Input } from '@angular/core';
import { Widget } from './../models/widget';

@Component({
  selector: 'widget-detail',
  templateUrl: './../../templates/widget-detail.component.html'
})
export class WidgetDetailComponent {
  @Input() widget: Widget;
}
