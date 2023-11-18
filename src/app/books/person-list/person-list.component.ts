import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { GameOfThronesService } from "../../services";
import { first } from "rxjs/operators";
import House from "../../House";
import Person from "../../Person";

@Component({
  selector: "app-person-list",
  templateUrl: "./person-list.component.html",
  styleUrls: ["./person-list.component.css"],
})
export class PersonListComponent implements OnInit {

  persons : Person[];
  searchString = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: GameOfThronesService,
  ) {
  }

  ngOnInit() {
    this.bookService.listPersons().subscribe({
      next: (response) => {
        this.persons = response;
      },
    })
  }
}
