import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {

  constructor() { }

  public login;
  public pass;
  public isLogged = false;
  public loginResult = "";
  ngOnInit() {
    
  }
  TryLogIn()
  {
    console.log(this.login);    
    console.log(this.pass);
    this.loginResult = "zle haslo";
  }
}
