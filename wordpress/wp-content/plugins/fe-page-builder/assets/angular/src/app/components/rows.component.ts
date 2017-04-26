/**
 * Created by MinhMan.Tran on 4/26/2017.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Row } from './../models/row';
import { RowService } from './../services/row.service';

@Component({
    selector: 'rows',
    templateUrl: './../../templates/rows.component.html',
    styleUrls: [ './../../styles/rows.component.css' ]
})
export class RowsComponent implements OnInit {
    rows: Row[];
    selectedRow: Row;

    constructor(
        private router: Router,
        private rowService: RowService) { }

    getRows(): void {
        this.rowService.getRows().then(rows => this.rows = rows);
    }

    ngOnInit(): void {
        this.getRows();
    }

    onSelect(row: Row): void {
        this.selectedRow = row;
    }

    editRow(): void {
        this.router.navigate(['/row', this.selectedRow.id]);
    }

    removeRow(): void {
        this.router.navigate(['/row', this.selectedRow.id]);
    }
}
