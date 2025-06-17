import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asgard } from './asgard';

describe('Asgard', () => {
  let component: Asgard;
  let fixture: ComponentFixture<Asgard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Asgard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Asgard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
