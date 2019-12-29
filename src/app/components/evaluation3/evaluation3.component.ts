import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-evaluation3',
  templateUrl: './evaluation3.component.html',
  styleUrls: ['./evaluation3.component.scss']
})
export class Evaluation3Component implements OnInit {

  arr: Array<any> = [];

  @Output() evaluationChange: EventEmitter<number> = new EventEmitter<number>();

  @Input() evaluation: number;


  constructor() { }

  doChange(value: number) {
    this.evaluation = value;
    this.arr = [];
    for (let i = 0; i < this.evaluation; i++) {
      this.arr.push(null);
    }
    this.evaluationChange.emit(value);
  }

  ngOnInit() {
    this.arr = new Array<any>(this.evaluation);


  }

}
