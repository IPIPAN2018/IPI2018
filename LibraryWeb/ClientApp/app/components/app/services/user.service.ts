import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    constructor(private http: Http) {
    }

    getUsers() {
        return this.http.get('/api/users')
            .map(res => res.json());
    }

    create(user) {
        return this.http.post('/api/users', user).map(res => res.json());
    }
}