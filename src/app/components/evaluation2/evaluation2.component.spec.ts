import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Evaluation2Component } from './evaluation2.component';

describe('Evaluation2Component', () => {
  let component: Evaluation2Component;
  let fixture: ComponentFixture<Evaluation2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Evaluation2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Evaluation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
