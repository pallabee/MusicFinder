/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MusicfinderService } from './musicfinder.service';

describe('Service: Musicfinder', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusicfinderService]
    });
  });

  it('should ...', inject([MusicfinderService], (service: MusicfinderService) => {
    expect(service).toBeTruthy();
  }));
});
