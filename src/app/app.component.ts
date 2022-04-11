import { ChildService } from './components/family/child/child.service';
import { Component, VERSION } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private logger: LoggerService,) {
    this.logger.log('in constructor');
     //childService.print();
  }

  name = 'Angular ' + VERSION.major;
}

