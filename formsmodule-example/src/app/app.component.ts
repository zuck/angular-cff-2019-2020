import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'formsmodule-example';
  model = {
    fiscalcode: 'Test',
    score: 0
  }

  ngOnInit () {
  }

  onSubmit () {
    alert(this.model.fiscalcode + ': ' + this.model.score)
  }
}
