import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-hooks';

  childName: string = 'Pippo';
  showChild: boolean = true;

  onButton1Click() {
    this.childName = 'Pluto';
  }

  onButton2Click() {
    this.showChild = !this.showChild
    if (!this.showChild) {
      this.childName = 'Pippo';
    }
  }
}
