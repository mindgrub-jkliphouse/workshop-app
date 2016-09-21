import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Person} from "../Services";

@Component({
  selector: 'app-archetype-card',
  templateUrl: './archetype-card.component.html',
  styleUrls: ['./archetype-card.component.css']
})
export class ArchetypeCardComponent implements OnInit {

  @Input() person;
  @Output() clickedCard = new EventEmitter<Person>();

  select(person: Person) {
    this.clickedCard.emit(person);
  }

  constructor() { }

  ngOnInit() {
  }

}
