import { Component } from '@angular/core';
import { getBaseUrl } from '../../app.browser.module';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {
    logged;
    constructor() {

    }

    ngOnInit() {
        this.logged = JSON.parse(sessionStorage.getItem('logged') || '{}');
    }

     loggedFunc() {
         this.logged = JSON.parse(sessionStorage.getItem('logged') || '{}');
    }

    logOut() {
        this.logged.logged = false;
        this.logged.asAdmin = false;
        sessionStorage.setItem('logged', JSON.stringify(this.logged));
        window.open(getBaseUrl() + "home", '_self');
    }
}

