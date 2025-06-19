import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-check',
  imports: [],
  templateUrl: './check.component.html',
  styleUrl: './check.component.scss',
})
export class CheckComponent {
  @Input() text: string = '';
  @Input() checked: boolean = false;
  @Input() indeterminate: boolean = false;
  @Input() color: string = '#fff';
  @Output() action = new EventEmitter<MouseEvent>();

  executeAction($event: MouseEvent) {
    this.action.emit($event);
  }
}
