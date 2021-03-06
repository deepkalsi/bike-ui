import { Component, OnInit } from '@angular/core';
import {BikeService} from '../../services/BikeService/bike.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  // @ts-ignore
  public bikes;
  constructor(private bikeService: BikeService) { }

  ngOnInit(): void {
    this.getBikes();
  }

  getBikes(): any {
    this.bikeService.getBikes().subscribe(
      data => {
        this.bikes = data;
      },
      err => console.error(err),
      () => console.log('bikes loaded')
    );
  }
}
