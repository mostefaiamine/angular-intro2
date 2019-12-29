import { Component, OnInit, Input } from '@angular/core';
import { Training } from 'src/app/model/training';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss'],
  providers: [DataService]
})
export class TableDataComponent implements OnInit {

  @Input() trainings: Training[] = [];

  constructor(public ds: DataService) { }

  ngOnInit() {
  }

}
