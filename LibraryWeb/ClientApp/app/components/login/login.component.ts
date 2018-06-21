import { Component, OnInit } from '@angular/core';
import { UserService } from '../app/services/user.service';
import { NavMenuComponent } from '../navmenu/navmenu.component';
import { getBaseUrl } from '../../app.browser.module';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
/** login component*/
export class LoginComponent implements OnInit {
    /** login ctor */
    users;
    login: any = {};

    constructor(private userService: UserService) {

    }

    ngOnInit(): void {
        this.userService.getUsers().subscribe(users => {
            this.users = users
        });
    }

    submit() {

        if (this.users.filter(v => v.email === this.login.email && v.password === this.login.password).length == 1) {
            this.login.logged = true;
            this.login.asAdmin = this.users.filter(v => v.email === this.login.email && v.password === this.login.password)[0].isAdmin;
            this.login.userId = this.users.filter(v => v.email === this.login.email && v.password === this.login.password)[0].userId;
            sessionStorage.setItem('logged', JSON.stringify(this.login));
            
            window.open(getBaseUrl() + "home", '_self');
        }
    }
}