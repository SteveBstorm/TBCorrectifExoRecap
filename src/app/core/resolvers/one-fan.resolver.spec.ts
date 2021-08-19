import { TestBed } from '@angular/core/testing';

import { OneFanResolver } from './one-fan.resolver';

describe('OneFanResolver', () => {
  let resolver: OneFanResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(OneFanResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
