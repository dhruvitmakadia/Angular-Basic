import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  alertName(name) {
    alert(`Hello ${name}`);
  }
}
