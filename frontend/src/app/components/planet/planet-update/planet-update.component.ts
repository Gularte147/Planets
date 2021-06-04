import { Planet } from "../planet.model";
import { Router, ActivatedRoute } from "@angular/router";
import { PlanetService } from "../planet.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-planet-update",
  templateUrl: "./planet-update.component.html",
  styleUrls: ["./planet-update.component.css"],
})
export class PlanetUpdateComponent implements OnInit {
  planet: Planet;

  constructor(
    private planetService: PlanetService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.planetService.readById(id).subscribe((planet) => {
      this.planet = planet;
    });
  }

  updatePlanet(): void {
    this.planetService.update(this.planet).subscribe(() => {
      this.planetService.showMessage("Planet atualizado com sucesso!");
      this.router.navigate(["/planets"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/planets"]);
  }
}
