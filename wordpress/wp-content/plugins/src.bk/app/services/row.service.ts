import { Injectable } from '@angular/core';

import { Row } from './../models/row';

const ROWS: Row[] = [
  {
    name: 'Hero banner',
    id: 1,
    type: 'normal',
    cls: 'fepb-row',
    addClass: [],
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

  getRow(id: number): Promise<Row> {
    return this.getRows()
        .then(rows => rows.find(row => row.id === id));
  }

}
