import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleCategoryListComponent } from './RoleCategory/roleCategorylist.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
const appRoutes: Routes = [
    {
        path: 'roleCategoryList',
        component: RoleCategoryListComponent

    },
    {
        path: 'home',
        component: AppComponent

    },
    //{
    //    path: 'home',
    //    component: HomeComponent

    //},
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