import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryContent } from './library-content';

describe('LibraryContent', () => {
  let component: LibraryContent;
  let fixture: ComponentFixture<LibraryContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
