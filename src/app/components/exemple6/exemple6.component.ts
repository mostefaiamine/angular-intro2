import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/model/training';
import { Data } from 'src/app/model/data';

@Component({
  selector: 'app-exemple6',
  templateUrl: './exemple6.component.html',
  styleUrls: ['./exemple6.component.scss']
})
export class Exemple6Component implements OnInit {

  text = 'Hello';

  trainings: Training[];

  change() {
    this.text = 'cool';
  }

  constructor() { }

  ngOnInit() {
    this.trainings = Data.list;
  }

}
