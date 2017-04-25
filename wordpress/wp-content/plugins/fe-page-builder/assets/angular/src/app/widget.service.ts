import { Injectable } from '@angular/core';

import { Widget } from './widget';
import { WIDGETS } from './mock-widgets';

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
}
