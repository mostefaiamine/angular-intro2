import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/model/training';
import { Data } from 'src/app/model/data';

@Component({
  selector: 'app-exemple5',
  templateUrl: './exemple5.component.html',
  styleUrls: ['./exemple5.component.scss']
})
export class Exemple5Component implements OnInit {

  trainings: Training[];

  constructor() { }

  ngOnInit() {
    this.trainings = Data.list;
  }

}
