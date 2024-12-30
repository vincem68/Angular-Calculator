import { Component } from '@angular/core';
import { SymbolButtonComponent } from './symbol-button/symbol-button.component';


@Component({
  selector: 'app-root',
  imports: [
    SymbolButtonComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  endProblem: boolean = false;
  //this will be the overall math expression
  expression: string = "";

  update(symbol: string){
    if (this.endProblem){
      this.expression = "";
      this.endProblem = false;
    }
    this.expression += symbol;
  }

  clear(): void {
    this.expression = "";
  }

  backSpace(): void {
    if (!this.endProblem){
      this.expression = this.expression.substring(0, this.expression.length - 1);
    }
  }

  solve(): void {
    try {
      this.expression = eval(this.expression); 
    } catch (error) {
        if (error instanceof SyntaxError) {
            this.expression = "Invalid expression";
        }
    }
    this.endProblem = true;
  }

}
