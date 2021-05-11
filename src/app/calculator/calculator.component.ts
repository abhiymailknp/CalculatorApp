import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  subDisplayText = '0';
  mainDisplayText = '';
  operand1: number;
  operand2: number;
  operator = '';
  calculationString = '';
  operator_loaded = false;

  operatorSet = false; 

  constructor() { }

  ngOnInit(): void {
  }

  public pressKey(key: string)
  {
    this.mainDisplayText += key;
  }

  public getOperator(key: string) {
    if (this.mainDisplayText === '')
      this.subDisplayText = 'Error:Invalid';
    else if (!this.operator_loaded) {
      this.operator = key;
      this.mainDisplayText += key;
      this.operand1 = parseFloat(this.mainDisplayText.split(this.operator)[0]);
      this.operator_loaded = true;
    }
    else
      return;

  }


  public allClear() {
    this.mainDisplayText = '';
    this.subDisplayText = '0';
    this.operatorSet = false;
  }

  public getAnswer() {
    //console.log(this.operator);
    this.calculationString = this.mainDisplayText;
    this.operand2 = parseFloat(this.mainDisplayText.split(this.operator)[1]);
    console.log(this.operand2);
    console.log(this.operand1);
    if (this.operator === '/') {
      this.subDisplayText = this.mainDisplayText;
      this.mainDisplayText = (this.operand1 / this.operand2).toString();
      this.subDisplayText = this.calculationString;
      if (this.mainDisplayText.length > 9) {
        this.mainDisplayText = this.mainDisplayText.substr(0, 9);
      }
    } else if (this.operator === '*') {
      this.subDisplayText = this.mainDisplayText;
      this.mainDisplayText = (this.operand1 * this.operand2).toString();
      this.subDisplayText = this.calculationString;
      if (this.mainDisplayText.length > 9) {
        this.mainDisplayText = 'ERROR';
        this.subDisplayText = 'Range Exceeded';
      }
    } else if (this.operator === '-') {
      this.subDisplayText = this.mainDisplayText;
      this.mainDisplayText = (this.operand1 - this.operand2).toString();
      this.subDisplayText = this.calculationString;
    } else if (this.operator === '+') {
      this.subDisplayText = this.mainDisplayText;
      this.mainDisplayText = (this.operand1 + this.operand2).toString();
      this.subDisplayText = this.calculationString;
      if (this.mainDisplayText.length > 9) {
        this.mainDisplayText = 'ERROR';
        this.subDisplayText = 'Range Exceeded';
      }
    } else {
      this.subDisplayText = '0';
    }
    this.operand1 = parseFloat(this.mainDisplayText);
    this.operator_loaded = false;
    //console.log(this.operand1);
  }
}


