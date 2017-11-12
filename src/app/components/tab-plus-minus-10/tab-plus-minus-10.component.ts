import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UtilsService } from './../../services';

@Component({
  selector: 'app-tab-plus-minus-10',
  templateUrl: './tab-plus-minus-10.component.html',
  styleUrls: ['./tab-plus-minus-10.component.less']
})
export class TabPlusMinus10Component implements OnInit {
  numberOne: number;
  numberTwo: number;
  number: number;   // определяетна сколько табличка
  operator: string; // определяет какая табличка +, -
  result: number;
  cases: Array<number>;
  displayResult: string;
  resultClass: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private utils: UtilsService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.operator = params['operator'] === 'plus' ? '+' : '-';
      this.number = +params['number'];
      console.log(this.operator);
      console.log(this.number);
      this.generateExpression();
    });
  }



  selectCase(value: number) {
    if (value === this.result) {
      this.resultClass = 'green';
      this.displayResult = 'Ура!!! Правильно!';

      this.generateExpression();
    }
    else {
      this.resultClass = 'red';
      this.displayResult = 'Хм... Не правильно! Спробуй ще раз.';
    }

    setTimeout(() => this.displayResult = '', 2000);
  }

  private generateExpression() {
    // якщо додавання
    if (this.operator === '+') {
      // визначаємо чи ставити число на перше місце чи на друге
      if (this.utils.randomInteger(0, 1) === 0) {
        this.numberOne = this.number;
        this.numberTwo = this.utils.randomInteger(0, 10 - this.number);
      }
      else {
        this.numberOne = this.utils.randomInteger(0, 10 - this.number);
        this.numberTwo = this.number;
      }
    }
    // якщо віднімання
    else {
      this.numberTwo = this.number;
      this.numberOne = this.utils.randomInteger(this.numberTwo, 10 - this.number);
    }

    // визначаємо правильну відповідь
    if (this.operator === '+') {
      this.result = this.numberOne + this.numberTwo;
    }
    else {
      this.result = this.numberOne - this.numberTwo;
    }

    // формуємо варіанти відповіді
    const cases: Set<number> = new Set([this.result]);
    while (cases.size < 3) {
      cases.add(this.utils.randomInteger(0, 10));
    }
    this.cases = [];
    cases.forEach(val => this.cases.push(val));
    this.cases.sort(() => 0.5 - Math.random());
  }
}
