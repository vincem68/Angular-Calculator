import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SymbolButtonComponent } from './symbol-button/symbol-button.component';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  imports: [
    SymbolButtonComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculator-App';

  //this will be the overall math expression
  expression: string = "";

  update(symbol: string){
    this.expression += symbol;
  }

  clear(){
    this.expression = "";
  }

  backSpace(): void {
    this.expression.substring(0, this.expression.length - 1);
  }
}
