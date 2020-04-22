import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RideTableComponent } from './ride-table.component';

describe('RideTableComponent', () => {
  let component: RideTableComponent;
  let fixture: ComponentFixture<RideTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RideTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RideTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
