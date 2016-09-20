import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Person, People} from "../apiTypes";

@Component({
  selector: 'app-selection-screen',
  templateUrl: './selection-screen.component.html',
  styleUrls: ['./selection-screen.component.css']
})


export class SelectionScreenComponent implements OnInit {

    people: Person[] = People;
    modelsForList: Person[] = [];

    filter1: string = "this filter";
    filter2: string = "that filter";

    getClickedCard(person: Person) {
        this.modelsForList.push(person);
    }


  constructor() { }

  ngOnInit() {
  }

}
