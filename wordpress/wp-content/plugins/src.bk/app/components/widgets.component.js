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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var widget_service_1 = require("./../services/widget.service");
var WidgetsComponent = (function () {
    function WidgetsComponent(router, widgetService) {
        this.router = router;
        this.widgetService = widgetService;
    }
    WidgetsComponent.prototype.getWidgets = function () {
        var _this = this;
        this.widgetService.getWidgets().then(function (widgets) { return _this.widgets = widgets; });
    };
    WidgetsComponent.prototype.ngOnInit = function () {
        this.getWidgets();
    };
    WidgetsComponent.prototype.onSelect = function (widget) {
        this.selectedWidget = widget;
    };
    WidgetsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/widget', this.selectedWidget.id]);
    };
    return WidgetsComponent;
}());
WidgetsComponent = __decorate([
    core_1.Component({
        selector: 'my-widgets',
        templateUrl: './../../templates/widgets.component.html',
        styleUrls: ['./../../styles/widgets.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        widget_service_1.WidgetService])
], WidgetsComponent);
exports.WidgetsComponent = WidgetsComponent;
//# sourceMappingURL=widgets.component.js.map