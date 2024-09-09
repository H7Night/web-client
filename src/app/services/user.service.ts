import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/index';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // 传递用户数据到后端的 createUser 接口
  createUser(userData: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/createUser`, userData);
  }

  // 删除用户接口
  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.baseUrl}/deleteUser/${id}`);
  }

  // 修改用户接口
  updateUser(id: number, userData: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/updateUser/${id}`, userData);
  }

  //查询用户接口
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/getUser/${id}`);
  }

  getUserPage(
    username: string,
    pageSize: number,
    pageNum: number
  ): Observable<any> {
    return this.http.get(`${this.baseUrl}/getUserPage`, {
      params: {
        username: username,
        pageSize: pageSize.toString(),
        pageNum: pageNum.toString(),
      },
    });
  }
}
