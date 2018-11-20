import { TestBed, inject } from '@angular/core/testing';

import { ConversorService } from './conversor.service';
import { HttpClientModule } from '@angular/common/http';

describe('ConversorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConversorService],
      imports:[
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([ConversorService], (service: ConversorService) => {
    expect(service).toBeTruthy();
  }));
});
