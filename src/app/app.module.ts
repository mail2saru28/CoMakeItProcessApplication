import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoleCategoryListComponent } from './RoleCategory/roleCategorylist.component';
import { AppRoutingModule } from './app-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Home/home.component';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
    declarations: [AppComponent, RoleCategoryListComponent, HomeComponent],
    bootstrap: [HomeComponent,]
})
export class AppModule { }
