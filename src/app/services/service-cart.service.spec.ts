/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Ultimate Salon Full App Flutter
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { TestBed } from '@angular/core/testing';

import { ServiceCartService } from './service-cart.service';

describe('ServiceCartService', () => {
  let service: ServiceCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
