import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GameOfThronesService } from "../../services";
import RandomQuote from "../../RandomQuote";

@Component({
  selector: "app-list-quotes",
  templateUrl: "./list-quotes.component.html",
  styleUrls: ["./list-quotes.component.css"],
})
export class ListQuotesComponent implements OnInit {
  randomQuotes :RandomQuote[];
  constructor(private service: GameOfThronesService, private router: Router) {}

  ngOnInit() {
    this.goRandomQuotes();
  }

  goRandomQuotes() {
    this.service.getRandomQuotes().subscribe({
      next: (response) => {
        this.randomQuotes=[]
        this.randomQuotes=response
      },
      error: (err) => {

      },
    })
  }
}
