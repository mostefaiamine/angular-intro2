import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carte6Component } from './carte6.component';

describe('Carte6Component', () => {
  let component: Carte6Component;
  let fixture: ComponentFixture<Carte6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carte6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carte6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
