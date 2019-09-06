import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleCategoryListComponent } from './RoleCategory/roleCategorylist.component';
const appRoutes: Routes = [
    {
        path: 'list',
        redirectTo: '',
        component: RoleCategoryListComponent
    },

];
@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }