import { Component, Input, OnInit } from '@angular/core';
import { HomeworldService } from '../homeworld.service';

@Component({
  selector: 'app-homeworld',
  templateUrl: './homeworld.component.html',
  styleUrls: ['./homeworld.component.scss']
})
export class HomeworldComponent implements OnInit {

  @Input() homeworld?: string;
  homeworldId?: string;
  planet: any;
  
  constructor( private homeworldService: HomeworldService) { }

  ngOnInit(): void {
    this.getPlanet();
  }

  getPlanet() {
    this.homeworldId = this.homeworld?.split('/')[5];
    this.homeworldService.getPlanet(this.homeworldId)
    .subscribe(data => this.planet = data)
  }
}
