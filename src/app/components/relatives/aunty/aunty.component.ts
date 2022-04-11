import { Component, OnInit } from '@angular/core';
import { UncleService } from './../uncle/uncle.service';

@Component({
  selector: 'app-aunty',
  templateUrl: './aunty.component.html',
  styleUrls: ['./aunty.component.css']
})
export class AuntyComponent implements OnInit {

  constructor(private uncleService:UncleService) { }

  ngOnInit() {
    this.uncleService.print();
  }

}