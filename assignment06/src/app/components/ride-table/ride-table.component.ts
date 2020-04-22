import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-ride-table',
  templateUrl: './ride-table.component.html',
  styleUrls: ['./ride-table.component.css']
})
export class RideTableComponent implements OnInit {
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

}
