import { HeaderService } from '../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-planet-crud',
  templateUrl: './planet-crud.component.html',
  styleUrls: ['./planet-crud.component.css']
})
export class PlanetCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Planeta',
      icon: 'public',
      routeUrl: '/planets'
    }
  }

  ngOnInit(): void {
  }

  navigateToPlanetCreate(): void {
    this.router.navigate(['/planets/create'])
  }

}
