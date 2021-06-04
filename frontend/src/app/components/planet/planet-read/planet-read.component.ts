import { PlanetService } from '../planet.service';
import { Planet } from '../planet.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planet-read',
  templateUrl: './planet-read.component.html',
  styleUrls: ['./planet-read.component.css']
})
export class PlanetReadComponent implements OnInit {

  planets: Planet[]
  displayedColumns = ['id', 'name', 'population','date', 'active', 'action']
  
  constructor(private planetService: PlanetService) { }

  ngOnInit(): void {
    this.planetService.read().subscribe(planets => {
      this.planets = planets
    })
  }

}
