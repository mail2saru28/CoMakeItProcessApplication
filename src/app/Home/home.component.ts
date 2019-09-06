import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
    selector: 'my-home',
    templateUrl: 'app/Home/home.component.html'
})
export class HomeComponent implements OnInit {
    constructor(
        private router: Router, private routes: ActivatedRoute) { }
    ngOnInit() { console.log('home component'); }

  
   
}

