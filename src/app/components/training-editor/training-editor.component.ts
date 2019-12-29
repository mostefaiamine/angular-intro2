import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/model/training';
import { Data } from 'src/app/model/data';
import { TrainingService } from 'src/app/services/training/training.service';

@Component({
  selector: 'app-training-editor',
  templateUrl: './training-editor.component.html',
  styleUrls: ['./training-editor.component.scss']
})
export class TrainingEditorComponent implements OnInit {

  title: string;

  domain: string;

  constructor(private $service: TrainingService) { }

  add() {
    const t: Training = {
      title: this.title,
      domain: this.domain
    };
    this.$service.addTraining(t);
  }

  ngOnInit() {
  }

}
