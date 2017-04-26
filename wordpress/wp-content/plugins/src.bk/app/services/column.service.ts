/**
 * Created by MinhMan.Tran on 4/26/2017.
 */
import { Injectable } from '@angular/core';

import { Row } from './../models/row';
import { Column } from './../models/column';

const COLUMNS: Column[] = [
    {
        id: 1,
        rowId: 1,
        cls: 'column',
        addClass: [],
        percent: 50
    },
    {
        id: 2,
        rowId: 1,
        cls: 'column',
        addClass: [],
        percent: 50
    }
];

@Injectable()
export class ColumnService {
    getColumns(): Promise<Column[]> {
        return Promise.resolve(COLUMNS);
    }

    getColumnsByRow(row: Row): Promise<Column> {
        return this.getColumns()
            .then(columns => columns.find(column => column.rowId === row.id));
    }

    getColumn(id: number): Promise<Column> {
        return this.getColumns()
            .then(columns => columns.find(column => column.id === id));
    }

}