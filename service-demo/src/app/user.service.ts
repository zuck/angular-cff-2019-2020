import { Injectable } from '@angular/core';

export class Player {
  email: string
  name: string

  constructor (email: string, name: string) {
    this.name = name
    this.email = email
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: string[] = []

  constructor() {}

  addUser(email: string) {
    this.users.push(email)
  }

  getAllUsers () {
    return this.users.sort()
  }
}
