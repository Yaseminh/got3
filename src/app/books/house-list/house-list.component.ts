import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { GameOfThronesService } from "../../services";
import House from "../../House";
import {Observable} from "rxjs";

@Component({
  selector: "app-house-list",
  templateUrl: "./house-list.component.html",
  styleUrls: ["./house-list.component.css"],
})
export class HouseListComponent implements OnInit {
  houses: Observable<House[]>;
  searchString = '';
  houses2 : House[];

  constructor(
    private fb: FormBuilder,
    private service: GameOfThronesService,
  ) {

    this.service.listHouses().subscribe({
      next: (response) => {
        this.houses2 = response;
      },
    })
  }

  ngOnInit() {

    this.houses= this.service.listHouses()
  }
}
