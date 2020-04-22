import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRideFilterComponent } from './book-ride-filter.component';

describe('BookRideFilterComponent', () => {
  let component: BookRideFilterComponent;
  let fixture: ComponentFixture<BookRideFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookRideFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRideFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
