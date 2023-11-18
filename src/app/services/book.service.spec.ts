import { TestBed } from '@angular/core/testing';

import { GameOfThronesService } from './game-of-thrones.service';

describe('BookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameOfThronesService = TestBed.get(GameOfThronesService);
    expect(service).toBeTruthy();
  });
});
