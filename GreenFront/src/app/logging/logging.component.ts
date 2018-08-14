import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {

  constructor(private router: Router) { }

  public login;
  public pass;
  public isLogged = false;
  public loginResult = "";
  @Output() LogonEvent = new EventEmitter();

  ngOnInit() {
    
  }
  TryLogIn()
  {
    console.log(this.login);    
    console.log(this.pass);
    //this.loginResult = "zle haslo";
    this.isLogged = true;
    this.LogonEvent.emit(this.isLogged);
    this.router.navigate(['word'])
  }
  TryLogout()
  {
    this.isLogged = false;
    this.LogonEvent.emit(this.isLogged);
    console.log(this.isLogged = false);  
    this.router.navigate(['index'])
  }
}
