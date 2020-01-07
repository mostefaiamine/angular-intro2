import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/model/training';
import { TrainingService } from 'src/app/services/training/training.service';


@Component({
  selector: 'app-exemple8',
  templateUrl: './exemple8.component.html',
  styleUrls: ['./exemple8.component.scss'],
  providers: []
})
export class Exemple8Component implements OnInit {

  trainings: Training[];



  constructor(private $ser: TrainingService) {


  }

  ngOnInit() {
    this.trainings = this.$ser.getData();
  }

}
