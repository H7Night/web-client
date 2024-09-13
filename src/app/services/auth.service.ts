import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/index';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.apiUrl;
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  constructor(private http: HttpClient) {}

  login(name: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { name, password });
  }
}
