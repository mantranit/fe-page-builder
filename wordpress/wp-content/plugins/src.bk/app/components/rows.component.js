"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by MinhMan.Tran on 4/26/2017.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var row_service_1 = require("./../services/row.service");
var column_service_1 = require("./../services/column.service");
var RowsComponent = (function () {
    function RowsComponent(router, rowService, columnService) {
        this.router = router;
        this.rowService = rowService;
        this.columnService = columnService;
    }
    RowsComponent.prototype.getRows = function () {
        var _this = this;
        this.rowService.getRows().then(function (rows) { return _this.rows = rows; });
    };
    RowsComponent.prototype.getColumns = function (row) {
        this.columnService.getColumnsByRow(row).then(function (columns) { return columns; });
    };
    RowsComponent.prototype.ngOnInit = function () {
        this.getRows();
    };
    RowsComponent.prototype.onSelect = function (row) {
        this.selectedRow = row;
    };
    RowsComponent.prototype.editRow = function () {
        this.router.navigate(['/row', this.selectedRow.id]);
    };
    RowsComponent.prototype.removeRow = function () {
        this.router.navigate(['/row', this.selectedRow.id]);
    };
    return RowsComponent;
}());
RowsComponent = __decorate([
    core_1.Component({
        selector: 'rows',
        templateUrl: './../../templates/rows.component.html',
        styleUrls: ['./../../styles/rows.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        row_service_1.RowService,
        column_service_1.ColumnService])
], RowsComponent);
exports.RowsComponent = RowsComponent;
//# sourceMappingURL=rows.component.js.map