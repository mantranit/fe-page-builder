import { Injectable } from '@angular/core';

import { Row } from './../models/row';

const ROWS: Row[] = [
  {
    name: 'Hero banner',
    id: 'fepb-1',
    type: 'normal',
    classes: [
      'fepb-row'
    ],
    styles: [
      {
        property: 'margin',
        value: '0'
      }
    ]
  }
];

@Injectable()
export class RowService {
  getRows(): Promise<Row[]> {
    return Promise.resolve(ROWS);
  }

  getRow(id: number): Promise<Widget> {
    return this.getRows()
        .then(rows => widgets.find(row => row.id === id));
  }

}
