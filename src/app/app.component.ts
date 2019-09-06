import { Component, OnInit } from '@angular/core';
import { Roles, RoleCategoryTypes } from './RoleTypes';
import { Role } from './Role';
import { RoleCategory } from './RoleCategory/roleCategory';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private route: ActivatedRoute,
        private router: Router,) { }
    ngOnInit() { }
    name = 'Angular';

    roles = Roles;
    selectedRole: Role;

    roleCategoryTypes = RoleCategoryTypes;
    selectedCategory: RoleCategory;

    isHidden: boolean = true;

    onSelect(role: Role): void {
        this.isHidden = !this.isHidden;
        this.selectedRole = role;

    }
    OnSelectCategory(roleCategory: RoleCategory): void {
        this.selectedCategory = roleCategory;
        this.router.navigate(['/list']);
    }
}

