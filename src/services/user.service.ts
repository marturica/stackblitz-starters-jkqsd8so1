import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

@Injectable()
export class UserService {
  getUserDetails(usedId: number): Observable<User> {
    return this.http.get<User>(`${BASE_URL}/users/${usedId}`);
  }

  saveUserDetails(userData: User): Observable<User> {
    return this.http.put<User>(`${BASE_URL}/users/${userData.id}`, userData);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${BASE_URL}/posts`);
  }

  constructor(private http: HttpClient) {}
}
