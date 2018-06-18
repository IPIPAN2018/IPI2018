import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor() {
        document.body.style.background = 'rgba(45, 45, 48, 1)';
        document.body.style.color = 'rgba(265, 265, 265, 1)';
    }
}