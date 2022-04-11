import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UncleService {

  constructor() { }
  
  print(){
    console.log("Prinitng from uncle service");
  }
}
