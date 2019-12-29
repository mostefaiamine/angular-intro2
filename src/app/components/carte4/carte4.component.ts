import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carte4',
  templateUrl: './carte4.component.html',
  styleUrls: ['./carte4.component.scss']
})
export class Carte4Component implements OnInit {

  @Input() description: string;

  @Input() domain: string;

  @Input() title: string;

  @Input() evaluation: number;

  @Input() recommanded = true;

  constructor() { }

  ngOnInit() {
  }

}
