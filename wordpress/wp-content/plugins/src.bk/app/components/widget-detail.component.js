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
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var widget_service_1 = require("./../services/widget.service");
var WidgetDetailComponent = (function () {
    function WidgetDetailComponent(widgetService, route, location) {
        this.widgetService = widgetService;
        this.route = route;
        this.location = location;
    }
    WidgetDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.widgetService.getWidget(+params['id']); })
            .subscribe(function (widget) { return _this.widget = widget; });
    };
    WidgetDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return WidgetDetailComponent;
}());
WidgetDetailComponent = __decorate([
    core_1.Component({
        selector: 'widget-detail',
        templateUrl: './../../templates/widget-detail.component.html',
        styleUrls: ['./../../styles/widget-detail.component.css']
    }),
    __metadata("design:paramtypes", [widget_service_1.WidgetService,
        router_1.ActivatedRoute,
        common_1.Location])
], WidgetDetailComponent);
exports.WidgetDetailComponent = WidgetDetailComponent;
//# sourceMappingURL=widget-detail.component.js.map