import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  getRandomInteger(a, b): number {
    return Math.floor(Math.random() * (b - a + 1)) + a;
  }

}
