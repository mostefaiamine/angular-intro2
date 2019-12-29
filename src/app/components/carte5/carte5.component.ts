import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carte5',
  templateUrl: './carte5.component.html',
  styleUrls: ['./carte5.component.scss']
})
export class Carte5Component implements OnInit {

  @Input() description: string;

  @Input() domain: string;

  @Input() title: string;

  @Input() evaluation: number;

  @Input() recommanded = true;

  change(value: number) {
    console.log('###', value);
    this.recommanded = value > 2;
  }

  constructor() { }

  ngOnInit() {
  }

}
