import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Overworld } from './overworld';

describe('Overworld', () => {
  let component: Overworld;
  let fixture: ComponentFixture<Overworld>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Overworld]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Overworld);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
