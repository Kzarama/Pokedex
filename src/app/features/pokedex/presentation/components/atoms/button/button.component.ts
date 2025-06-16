import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() active = false;
  @Input() text = '';
  @Input() param: string | undefined = undefined;
  @Output() action = new EventEmitter<string>();

  executeAction() {
    this.action.emit(this.param);
  }
}
