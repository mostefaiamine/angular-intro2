import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/model/data';
import { Training } from 'src/app/model/training';

@Component({
  selector: 'app-exemple4',
  templateUrl: './exemple4.component.html',
  styleUrls: ['./exemple4.component.scss']
})
export class Exemple4Component implements OnInit {
  trainings: Training[];

  constructor() { }

  ngOnInit() {
    this.trainings = Data.list;
  }

}
