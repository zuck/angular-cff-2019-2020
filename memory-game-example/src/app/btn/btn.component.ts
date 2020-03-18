import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent {
  @Output() clicked = new EventEmitter<string>();

  msg: string = 'Hello World!!!';

  notifyClick() {
    this.clicked.emit(this.msg);
  }
}
