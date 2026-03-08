import { Component, EventEmitter, Output, input } from '@angular/core';

@Component({
  selector: 'app-popup',
  imports: [],
  templateUrl: './popup.html',
  styleUrl: './popup.css'
})
export class PopupComponent {
  readonly isOpen = input<boolean>(false);
  @Output() toggle = new EventEmitter<boolean>();

  closePopup() {
    this.toggle.emit(!this.isOpen());
  }
}


