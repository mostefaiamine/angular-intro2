import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/model/training';
import { TrainingService } from 'src/app/services/training/training.service';
import { DataService } from 'src/app/services/data.service';
import { CalcService } from 'src/app/services/calc.service';

@Component({
  selector: 'app-exemple8',
  templateUrl: './exemple8.component.html',
  styleUrls: ['./exemple8.component.scss'],
  providers: [DataService]
})
export class Exemple8Component implements OnInit {

  trainings: Training[];



  constructor(private $ser: TrainingService, public ds: DataService) {


  }

  ngOnInit() {
    this.trainings = this.$ser.getData();
  }

}
