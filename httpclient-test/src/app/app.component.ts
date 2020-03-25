import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'httpclient-test';

  api: ApiService
  users: any

  constructor (api: ApiService) {
    this.api = api
  }

  ngOnInit () {
    const res = this.api.getUsers()

    console.log('1', this.users)

    res.subscribe(usersByBackend => {
      console.log('2', this.users)
      this.users = usersByBackend
      console.log('3', this.users)
    })

    console.log('4', this.users)
  }
}
