import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-symbol-button',
  imports: [],
  templateUrl: './symbol-button.component.html',
  styleUrl: './symbol-button.component.css'
})
export class SymbolButtonComponent {
  @Input() symbol!: string;
  @Output() expressionChange: EventEmitter<string> = new EventEmitter<string>();

  addSymbol() {
    this.expressionChange.emit(this.symbol);
  }
}
