import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GMapsComponent } from './gmaps.component';

describe('GMapsComponent', () => {
  let component: GMapsComponent;
  let fixture: ComponentFixture<GMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
