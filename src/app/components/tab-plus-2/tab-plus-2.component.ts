import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-plus-2',
  templateUrl: './tab-plus-2.component.html',
  styleUrls: ['./tab-plus-2.component.less']
})
export class TabPlus2Component implements OnInit {
  numberOne: number;
  numberTwo: number;
  result: number;
  cases: Array<number>;
  displayResult: string;

  constructor() { }

  ngOnInit() {
    this.generateExpression();
  }

  selectCase(value: number) {
    if (value === this.result) {
      this.displayResult = 'Ура!!! Правильно!';
    }
    else {
      this.displayResult = 'Хм... Не правильно!';
    }

    setTimeout(() => this.displayResult = '', 2000);
      this.generateExpression();
    }

  private generateExpression() {
    if (this.randomInteger(0, 1) === 0) {
      this.numberOne = 2;
      this.numberTwo = this.randomInteger(0, 8);
    }
    else {
      this.numberOne = this.randomInteger(0, 8);
      this.numberTwo = 2;
    }
    this.result = this.numberOne + this.numberTwo;

    const cases: Set<number> = new Set([this.result]);
    while (cases.size < 3) {
      cases.add(this.randomInteger(0, 10));
    }
    this.cases = [];
    cases.forEach(val => this.cases.push(val));
    this.cases.sort(() => 0.5 - Math.random());
  }

  private randomInteger(a, b): number {
    return Math.floor(Math.random() * (b - a + 1)) + a;
  }

}
