import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carte4Component } from './carte4.component';

describe('Carte4Component', () => {
  let component: Carte4Component;
  let fixture: ComponentFixture<Carte4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carte4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carte4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
