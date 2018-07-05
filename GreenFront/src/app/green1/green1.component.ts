import { Component, OnInit } from '@angular/core';
import { GenericNumber, MyT } from '../Code/TLogic';
@Component({
  selector: '[green1]',
  templateUrl: './green1.component.html',
  styleUrls: ['./green1.component.css']
})
export class Green1Component implements OnInit {
public name = "some user";
public surname = "ffel"
public myGenericNumber: GenericNumber<number>;
  constructor() { }

  ngOnInit() {
    this.myGenericNumber = new GenericNumber<number>();
    this.myGenericNumber.zeroValue = 0;
    this.myGenericNumber.add = function(x, y) { return x + y; };
    this.myGenericNumber.greeting = 'hey';
  }
  onClick(event)
  {
    console.log(event);    
  }
  LogMessage(value)
  {
    console.log(value);
  }
}
