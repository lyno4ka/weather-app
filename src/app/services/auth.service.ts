import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../interfaces/user.interfaces';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) {
  }

  get token(): string {
    return '';
  }

  login(user: User): Observable<any> {
    return this.http.post('', user);
  }

  logout() {

  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken() {

  }
}
