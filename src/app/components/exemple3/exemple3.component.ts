import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/model/training';
import { Data } from 'src/app/model/data';

@Component({
  selector: 'app-exemple3',
  templateUrl: './exemple3.component.html',
  styleUrls: ['./exemple3.component.scss']
})
export class Exemple3Component implements OnInit {

  trainings: Training[];

  constructor() { }

  ngOnInit() {
    this.trainings = Data.list;
  }

}
