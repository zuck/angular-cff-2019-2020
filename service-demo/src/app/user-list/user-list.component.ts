import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userService: UserService
  users: string[] = []

  constructor(userService: UserService) {
    this.userService = userService
  }

  ngOnInit() {
    this.users = this.userService.getAllUsers()
  }

}
