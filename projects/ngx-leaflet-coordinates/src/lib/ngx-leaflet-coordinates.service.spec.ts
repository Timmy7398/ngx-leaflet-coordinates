import { TestBed } from '@angular/core/testing';

import { NgxLeafletCoordinatesService } from './ngx-leaflet-coordinates.service';

describe('NgxLeafletCoordinatesService', () => {
  let service: NgxLeafletCoordinatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxLeafletCoordinatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
