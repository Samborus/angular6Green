import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[green1]',
  templateUrl: './green1.component.html',
  styleUrls: ['./green1.component.css']
})
export class Green1Component implements OnInit {
public name = "some user";
public surname = "ffel"
  constructor() { }

  ngOnInit() {
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
