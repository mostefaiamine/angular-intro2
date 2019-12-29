import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carte3Component } from './carte3.component';

describe('Carte3Component', () => {
  let component: Carte3Component;
  let fixture: ComponentFixture<Carte3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carte3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carte3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
