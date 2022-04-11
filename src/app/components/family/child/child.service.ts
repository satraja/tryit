import { Injectable } from '@angular/core';

@Injectable()
export class ChildService {
  constructor() {}

  print() {
    console.log('child service print');
  }
}
