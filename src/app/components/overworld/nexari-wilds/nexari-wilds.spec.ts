import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NexariWilds } from './nexari-wilds';

describe('NexariWilds', () => {
  let component: NexariWilds;
  let fixture: ComponentFixture<NexariWilds>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NexariWilds]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NexariWilds);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
