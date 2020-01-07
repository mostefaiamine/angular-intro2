import { Component, OnInit, Input } from '@angular/core';
import { Training } from 'src/app/model/training';
import { Data } from 'src/app/model/data';
import { TrainingService } from 'src/app/services/training/training.service';


@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.scss'],
  providers: []
})
export class ListDataComponent implements OnInit {

  @Input() trainings: Training[] = [];


  constructor(public ser: TrainingService) { }

  ngOnInit() {

  }

}
