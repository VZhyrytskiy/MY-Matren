import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  constructor() { }

  randomInteger(a, b): number {
    return Math.floor(Math.random() * (b - a + 1)) + a;
  }

}
