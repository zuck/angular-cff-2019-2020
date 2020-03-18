import { Component, Input, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy {
  @Input() name: string = null;

  constructor() {
    console.log('constructor')
  }

  ngOnInit() {
    console.log('ngOnInit')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes)
  }

  ngOnDestroy() {
    console.log('ngOnDestroy')
  }
}
