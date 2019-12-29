import { Component, OnInit, Input } from '@angular/core';
import { Training } from 'src/app/model/training';
import { Data } from 'src/app/model/data';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.scss'],
  providers: [DataService]
})
export class ListDataComponent implements OnInit {

  @Input() trainings: Training[] = [];


  constructor(public ds: DataService) { }

  ngOnInit() {

  }

}
