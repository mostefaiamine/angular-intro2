import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carte5Component } from './carte5.component';

describe('Carte5Component', () => {
  let component: Carte5Component;
  let fixture: ComponentFixture<Carte5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carte5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carte5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
