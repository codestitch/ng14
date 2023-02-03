import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent {
  @Output() onClick: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  youClicked() {
    this.onClick.emit('oi');
  }
}
