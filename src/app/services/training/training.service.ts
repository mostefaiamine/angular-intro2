import { Injectable } from '@angular/core';
import { Training } from 'src/app/model/training';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  private $data: Training[] = [
    { domain: 'Frontend Dev', title: 'Angular', evaluation: 5, description: 'A cool training about Angular', recommanded: true },
    { domain: 'Frontend Dev', title: 'React', evaluation: 2, description: 'Just to tell why React is not for me', recommanded: false },
    { domain: 'Backend Dev', title: 'Django', evaluation: 2, description: 'Why the hell are you teaching this', recommanded: false },
  ];

  constructor() { }

  public addTraining(t: Training) {
    this.$data.push(t);
}

  getData(): Training[] {
    return this.$data;
  }
}
