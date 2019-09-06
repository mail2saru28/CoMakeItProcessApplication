import { Component, OnInit } from '@angular/core';
import { Roles, RoleCategoryTypes } from './RoleTypes';
import { Role } from './Role';
import { RoleCategory } from './RoleCategory/roleCategory';
import { RouterModule, ActivatedRoute,Routes } from '@angular/router';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit {

    constructor(
        private router: Router, private routes: ActivatedRoute) { }
    ngOnInit() { console.log('app component'); }
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
        this.router.navigate(['/roleCategoryList'] );
    }
}

