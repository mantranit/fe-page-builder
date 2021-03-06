"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./components/dashboard.component");
var rows_component_1 = require("./components/rows.component");
var widgets_component_1 = require("./components/widgets.component");
var widget_detail_component_1 = require("./components/widget-detail.component");
var routes = [
    { path: '', redirectTo: '/rows', pathMatch: 'full' },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'rows', component: rows_component_1.RowsComponent },
    { path: 'widget/:id', component: widget_detail_component_1.WidgetDetailComponent },
    { path: 'widgets', component: widgets_component_1.WidgetsComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes, { useHash: true })],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map