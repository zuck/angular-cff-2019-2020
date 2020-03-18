import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() image = null;
  @Input() idx = -1;
  @Input() flipped = false;
  @Output() clicked = new EventEmitter<Number>();

  ngOnInit() {
  }

  onClick() {
    this.clicked.emit(this.idx)
  }
}
