import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-evaluation2',
  templateUrl: './evaluation2.component.html',
  styleUrls: ['./evaluation2.component.scss']
})
export class Evaluation2Component implements OnInit {

  arr: Array<any> = [];

  @Input() evaluation: number;

  constructor() { }

  ngOnInit() {
    this.arr = new Array<any>(this.evaluation);
  }

}
