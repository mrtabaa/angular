import { TestBed } from '@angular/core/testing';

import { MoshFollowersService } from './mosh-followers.service';

describe('MoshFollowersService', () => {
  let service: MoshFollowersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoshFollowersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
