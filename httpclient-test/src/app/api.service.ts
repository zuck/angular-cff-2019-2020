import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const FETCH_USERS_URI = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  http: HttpClient

  constructor(http: HttpClient) {
    this.http = http
  }

  getUsers () {
    return this.http.get(FETCH_USERS_URI)
  }
}
