import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carte6',
  templateUrl: './carte6.component.html',
  styleUrls: ['./carte6.component.scss']
})
export class Carte6Component implements OnInit {

  @Input() description: string;

  @Input() domain: string;

  @Input() title: string;

  @Input() evaluation: number;



  constructor() { }

  ngOnInit() {
  }
}
