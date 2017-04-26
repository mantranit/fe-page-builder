"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var WIDGETS = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];
var WidgetService = (function () {
    function WidgetService() {
    }
    WidgetService.prototype.getWidgets = function () {
        return Promise.resolve(WIDGETS);
    };
    // See the "Take it slow" appendix
    WidgetService.prototype.getWidgetsSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () { return resolve(_this.getWidgets()); }, 2000);
        });
    };
    WidgetService.prototype.getWidget = function (id) {
        return this.getWidgets()
            .then(function (widgets) { return widgets.find(function (widget) { return widget.id === id; }); });
    };
    return WidgetService;
}());
WidgetService = __decorate([
    core_1.Injectable()
], WidgetService);
exports.WidgetService = WidgetService;
//# sourceMappingURL=widget.service.js.map