import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLeafletCoordinatesComponent } from './ngx-leaflet-coordinates.component';

describe('NgxLeafletCoordinatesComponent', () => {
  let component: NgxLeafletCoordinatesComponent;
  let fixture: ComponentFixture<NgxLeafletCoordinatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLeafletCoordinatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLeafletCoordinatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
