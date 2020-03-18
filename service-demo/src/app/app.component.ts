import { Component } from '@angular/core';

import { UserService } from './user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  title = 'service-demo';

  userService: UserService

  constructor (userService: UserService) {
    this.userService = userService
    this.userService.addUser('a@b.it')
    this.userService.addUser('a@c.it')
    this.userService.addUser('a@e.it')
    this.userService.addUser('a@a.it')
    this.userService.addUser('a@d.it')
  }
}
