import { Router, ActivatedRoute } from "@angular/router";
import { PlanetService } from "../planet.service";
import { Planet } from "../planet.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-planet-delete",
  templateUrl: "./planet-delete.component.html",
  styleUrls: ["./planet-delete.component.css"],
})
export class PlanetDeleteComponent implements OnInit {
  planet: Planet;

  constructor(
    private planetService: PlanetService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.planetService.readById(id).subscribe((planet) => {
      this.planet = planet;
    });
  }

  deletePlanet(): void {
    this.planetService.delete(this.planet.id).subscribe(() => {
      this.planetService.showMessage("Planeta excluido com sucesso!");
      this.router.navigate(["/planets"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/planets"]);
  }
}
