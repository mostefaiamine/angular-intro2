import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carte2Component } from './carte2.component';

describe('Carte2Component', () => {
  let component: Carte2Component;
  let fixture: ComponentFixture<Carte2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carte2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carte2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
