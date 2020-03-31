import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'formsmodule-example';
  model = {
    name: 'Test',
    score: 0
  }

  ngOnInit () {
  }

  onSubmit () {
    alert(this.model.name + ': ' + this.model.score)
  }
}
