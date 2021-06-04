import { PlanetDeleteComponent } from './components/planet/planet-delete/planet-delete.component';
import { PlanetUpdateComponent } from './components/planet/planet-update/planet-update.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { PlanetCrudComponent } from "./views/planet-crud/planet-crud.component";
import { PlanetCreateComponent } from './components/planet/planet-create/planet-create.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "planets",
    component: PlanetCrudComponent
  },
  {
    path: "planets/create",
    component: PlanetCreateComponent
  },
  {
    path: "planets/update/:id",
    component: PlanetUpdateComponent
  },
  {
    path: "planets/delete/:id",
    component: PlanetDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
