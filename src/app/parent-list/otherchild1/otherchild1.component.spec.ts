import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Otherchild1Component } from './otherchild1.component';

describe('Otherchild1Component', () => {
  let component: Otherchild1Component;
  let fixture: ComponentFixture<Otherchild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Otherchild1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Otherchild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
