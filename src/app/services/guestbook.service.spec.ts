/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GuestbookService } from './guestbook.service';

describe('Service: Guestbook', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuestbookService]
    });
  });

  it('should ...', inject([GuestbookService], (service: GuestbookService) => {
    expect(service).toBeTruthy();
  }));
});
