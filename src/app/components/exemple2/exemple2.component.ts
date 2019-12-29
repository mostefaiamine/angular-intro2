import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemple2',
  templateUrl: './exemple2.component.html',
  styleUrls: ['./exemple2.component.scss']
})
export class Exemple2Component implements OnInit {

  public description = 'This is a description';

  constructor() { }

  ngOnInit() {
  }

}
