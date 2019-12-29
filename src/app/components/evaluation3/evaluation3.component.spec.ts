import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Evaluation3Component } from './evaluation3.component';

describe('Evaluation3Component', () => {
  let component: Evaluation3Component;
  let fixture: ComponentFixture<Evaluation3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Evaluation3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Evaluation3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
