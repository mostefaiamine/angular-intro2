import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carte1Component } from './carte1.component';

describe('Carte1Component', () => {
  let component: Carte1Component;
  let fixture: ComponentFixture<Carte1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carte1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carte1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
