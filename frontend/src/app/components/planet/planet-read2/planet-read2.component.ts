import { Planet } from '../planet.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PlanetRead2DataSource } from './planet-read2-datasource';

@Component({
  selector: 'app-planet-read2',
  templateUrl: './planet-read2.component.html',
  styleUrls: ['./planet-read2.component.css']
})
export class PlanetRead2Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Planet>;
  dataSource: PlanetRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'population'];

  ngOnInit() {
    this.dataSource = new PlanetRead2DataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
