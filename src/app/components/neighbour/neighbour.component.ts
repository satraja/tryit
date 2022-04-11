import { Component, OnInit } from '@angular/core';
import { UncleService } from '../relatives/uncle/uncle.service';

@Component({
  selector: 'app-neighbour',
  templateUrl: './neighbour.component.html',
  styleUrls: ['./neighbour.component.css']
})
export class NeighbourComponent implements OnInit {

  constructor(private uncleService:UncleService) { }

  ngOnInit() {
    this.uncleService.print()
  }

}