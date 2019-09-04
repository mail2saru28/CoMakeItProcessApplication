import { Component } from '@angular/core';
import { Roles } from '../app/RoleTypes';

@Component({
  selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent { name = 'Angular'; roles = Roles; }
