import { Injectable } from '@angular/core';

@Injectable()
export class GrandChildService {
  constructor() {}
  print(message: string) {
    console.log(`Grandd child ${message}`);
  }
}
