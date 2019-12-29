import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carte2', 
  templateUrl: './carte2.component.html',
  styleUrls: ['./carte2.component.scss']
})
export class Carte2Component implements OnInit {
  @Input() description: string;

  @Input() domain: string;

  @Input() title: string;



  constructor() { }

  ngOnInit() {
  }

}
