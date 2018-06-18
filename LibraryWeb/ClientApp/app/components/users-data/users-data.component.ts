import { Component, OnInit } from '@angular/core';
import { UserService } from '../app/services/user.service';

@Component({
    selector: 'app-users-data',
    templateUrl: './users-data.component.html',
    styleUrls: ['./users-data.component.css']
})
/** users-data component*/
export class UsersDataComponent implements OnInit {
    users;
    user: any = {};
    /** users-data ctor */
    constructor(private userService: UserService) {

    }

    ngOnInit() {
        this.userService.getUsers().subscribe(users => {
            this.users = users
        });
    }

    submit() {
        this.userService.create(this.user).subscribe(x => console.log("..."));
    }
}