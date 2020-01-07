import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  interpolation: ['::', '::']
})

export class AppComponent {

  title = 'This Is My Application';
  name = 'Dhruvit Makadia';
  number = 9426877444;
  names = ['My', 'Name', 'Is', 'Dhruvit'];
  flag: boolean;
  constructor(public myservice: MyserviceService) {
    myservice.alertName(this.name);
  }
  sayHello() {
    alert('Hello !');
  }

}
