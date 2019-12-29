import { Injectable } from '@angular/core';
import { CalcService } from './calc.service';

@Injectable()
export class DataService {

  private $text: string;

  constructor(private $calc: CalcService) {
    this.$text = 'Valeur initiale';
  }

  getText() {
    return this.$text;
  }

  setText(v: string) {
    this.$text = v;
  }

  getData(): string {
    return `C est cool Angular ${this.$calc.getNumber()}`;
  }
}
