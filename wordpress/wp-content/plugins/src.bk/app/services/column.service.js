"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by MinhMan.Tran on 4/26/2017.
 */
var core_1 = require("@angular/core");
var COLUMNS = [
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
var ColumnService = (function () {
    function ColumnService() {
    }
    ColumnService.prototype.getColumns = function () {
        return Promise.resolve(COLUMNS);
    };
    ColumnService.prototype.getColumnsByRow = function (row) {
        return this.getColumns()
            .then(function (columns) { return columns.find(function (column) { return column.rowId === row.id; }); });
    };
    ColumnService.prototype.getColumn = function (id) {
        return this.getColumns()
            .then(function (columns) { return columns.find(function (column) { return column.id === id; }); });
    };
    return ColumnService;
}());
ColumnService = __decorate([
    core_1.Injectable()
], ColumnService);
exports.ColumnService = ColumnService;
//# sourceMappingURL=column.service.js.map