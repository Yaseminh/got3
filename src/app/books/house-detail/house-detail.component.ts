import {Component, OnInit} from "@angular/core";
import {GameOfThronesService} from "../../services";
import {ActivatedRoute, Router} from "@angular/router";
import House from "../../House";

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
  hero$!: House;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: GameOfThronesService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe(
      {
        next: (response) => {
          this.getHouse(response)
        },
        error: (err) => {
        },
      }
    )
  }

  getHouse(id): void {
    this.service.getHouse(id.slug).subscribe({
      next: (response) => {
        this.hero$=response[0]
      },
      error: (err) => {

      },
    })
    // console.log(id.slug)
  }

  gotoHeroes(hero: any) {
    const heroId = hero ? hero.id : null;
    this.router.navigate(['/superheroes', { id: heroId }]);
  }
}
