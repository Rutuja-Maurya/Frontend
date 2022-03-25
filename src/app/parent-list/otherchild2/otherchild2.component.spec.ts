import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Otherchild2Component } from './otherchild2.component';

describe('Otherchild2Component', () => {
  let component: Otherchild2Component;
  let fixture: ComponentFixture<Otherchild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Otherchild2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Otherchild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
