import { Component, OnInit, Input } from '@angular/core';
import { Training } from 'src/app/model/training';
import { TrainingService } from 'src/app/services/training/training.service';


@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss'],
  providers: []
})
export class TableDataComponent implements OnInit {

  @Input() trainings: Training[] = [];

  constructor(public ser: TrainingService) { }

  ngOnInit() {
  }

}
