import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'


@Injectable()
export class AuthenticationGuardService {

  constructor(private http: Http) { }

    login(username: string, password: string) {
        return this.http.post('/api/users/authenticate', {username: username, password: password})
        .map((response: Response) => {
            // login successful if there's a jwt token in the response
            let user = response.json();
            if (user) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        });
    }

    static logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    static isloggedin(){
        return !!localStorage.getItem('currentUser');
    }
}

export function isloggedin(){
  return !!localStorage.getItem('currentUser');
}

export function  logout(){
  localStorage.removeItem('currentUser');
}
