import { Planet } from '../planet.model';
import { PlanetService } from '../planet.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planet-create',
  templateUrl: './planet-create.component.html',
  styleUrls: ['./planet-create.component.css']
})
export class PlanetCreateComponent implements OnInit {

  planet: Planet = {
    name: '',
    population: null,
    date: null,
    active: null,
    
  }

  constructor(private planetService: PlanetService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createPlanet(): void {
    this.planetService.create(this.planet).subscribe(() => {
      this.planetService.showMessage('Planeta criado!')
      this.router.navigate(['/planets'])
    })

  }

  cancel(): void {
    this.router.navigate(['/planets'])
  }
}
