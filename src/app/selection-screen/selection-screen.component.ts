import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Person, PeopleService, FilterService} from "../Services";
import {Response} from "@angular/http";

@Component({
  selector: 'app-selection-screen',
  templateUrl: './selection-screen.component.html',
  styleUrls: ['./selection-screen.component.css'],
    providers: [FilterService, PeopleService]
})


export class SelectionScreenComponent implements OnInit {

    people: Person[];
    filters: string[];
    modelsForList: Person[] = [];

    getClickedCard(person: Person) {
        this.modelsForList.push(person);
    }


  constructor(
      private peopleService: PeopleService,
      private filterService: FilterService
  ) { }

  ngOnInit() {
      const peopleObs = this.peopleService.getPeople();
      peopleObs.subscribe((res: Response) => {
          console.log(res);
          this.people = res.json();   // means "parse as JSON"
      });

      this.filters = this.filterService.getFilters()
  }

}
