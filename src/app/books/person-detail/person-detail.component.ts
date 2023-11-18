import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {GameOfThronesService} from "../../services";
import Person from "../../Person";
import RandomQuote from "../../RandomQuote";

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  person$!: Person;
  randomQuotes :RandomQuote[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: GameOfThronesService
  ) {}


  ngOnInit(): void {
    this.route.params.subscribe(
      {
        next: (response) => {
          this.getPerson(response)
        },
        error: (err) => {
        },
      }
    )
  }

  getPerson(id): void {
    this.service.getPerson(id.slug).subscribe({
      next: (response) => {
        this.person$=response[0]
      },
      error: (err) => {

      },
    })
  }

  gotoHeroes(hero: any) {
    this.router.navigate(['/personheroes']);
  }

  goQuoteOfCharacter(name) {
    this.service.getQuoteOfCharacter(name).subscribe({
      next: (response) => {
        this.randomQuotes=response
        this.person$.quotes=[];
        for(let i =0 ;i<this.randomQuotes.length;i++){
          this.person$.quotes.push(this.randomQuotes[i].sentence);
        }
      },
      error: (err) => {

      },
    })
  }
}
