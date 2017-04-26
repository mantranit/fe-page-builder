"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ROWS = [
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
var RowService = (function () {
    function RowService() {
    }
    RowService.prototype.getRows = function () {
        return Promise.resolve(ROWS);
    };
    RowService.prototype.getRow = function (id) {
        return this.getRows()
            .then(function (rows) { return rows.find(function (row) { return row.id === id; }); });
    };
    return RowService;
}());
RowService = __decorate([
    core_1.Injectable()
], RowService);
exports.RowService = RowService;
//# sourceMappingURL=row.service.js.map