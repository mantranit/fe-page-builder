import { Injectable } from '@angular/core';

import { Widget } from './../models/widget';

const WIDGETS: Widget[] = [
  {id: 11, name: 'Mr. Nice'},
  {id: 12, name: 'Narco'},
  {id: 13, name: 'Bombasto'},
  {id: 14, name: 'Celeritas'},
  {id: 15, name: 'Magneta'},
  {id: 16, name: 'RubberMan'},
  {id: 17, name: 'Dynama'},
  {id: 18, name: 'Dr IQ'},
  {id: 19, name: 'Magma'},
  {id: 20, name: 'Tornado'}
];

@Injectable()
export class WidgetService {
  getWidgets(): Promise<Widget[]> {
    return Promise.resolve(WIDGETS);
  }

  // See the "Take it slow" appendix
  getWidgetsSlowly(): Promise<Widget[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getWidgets()), 2000);
    });
  }

  getWidget(id: number): Promise<Widget> {
    return this.getWidgets()
        .then(widgets => widgets.find(widget => widget.id === id));
  }

}
