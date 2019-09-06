import { Component, OnInit } from '@angular/core';
@Component({

    selector: 'roleCategory-list',
    template:'<h1>hi </h1>'
})

export class RoleCategoryListComponent implements OnInit
{
    constructor() { }
    ngOnInit()
    {
        console.log('cat component');
    }
}