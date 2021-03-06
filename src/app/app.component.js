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
var RoleTypes_1 = require("./RoleTypes");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var AppComponent = /** @class */ (function () {
    function AppComponent(router, routes) {
        this.router = router;
        this.routes = routes;
        this.name = 'Angular';
        this.roles = RoleTypes_1.Roles;
        this.roleCategoryTypes = RoleTypes_1.RoleCategoryTypes;
        this.isHidden = true;
    }
    AppComponent.prototype.ngOnInit = function () { console.log('app component'); };
    AppComponent.prototype.onSelect = function (role) {
        this.isHidden = !this.isHidden;
        this.selectedRole = role;
    };
    AppComponent.prototype.OnSelectCategory = function (roleCategory) {
        this.selectedCategory = roleCategory;
        this.router.navigate(['/roleCategoryList']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html'
        }),
        __metadata("design:paramtypes", [router_2.Router, router_1.ActivatedRoute])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map