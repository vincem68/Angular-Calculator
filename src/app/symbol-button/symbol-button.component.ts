import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

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
    if (this.symbol == 'NEG'){
      this.expressionChange.emit('-');
    }
    else {
      this.expressionChange.emit(this.symbol);
    }
  }

  checkSymbol(): string {
    if ([' + ', ' - ', ' * ', ' / ', '.', 'NEG', '(', ')'].includes(this.symbol)){
      return "opButton";
    }
    return "numButton";
  }
}
