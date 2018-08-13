import { Component, OnInit } from '@angular/core';
import { Word } from 'src/app/Model/Word';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

  public model: Word;
  
  constructor() { }

  ngOnInit() {
  }

}
