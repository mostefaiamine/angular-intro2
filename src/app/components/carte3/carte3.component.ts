import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carte3',
  templateUrl: './carte3.component.html',
  styleUrls: ['./carte3.component.scss']
})
export class Carte3Component implements OnInit {

  @Input() description: string;

  @Input() domain: string;

  @Input() title: string;

  @Input() evaluation: number;

  @Input() recommanded: boolean = true;



  constructor() { }

  ngOnInit() {
  }

}
