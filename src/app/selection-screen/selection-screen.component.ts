import { Component, OnInit } from '@angular/core';
import {ArchetypeCardComponent} from "../archetype-card/archetype-card.component";

@Component({
  selector: 'app-selection-screen',
  templateUrl: './selection-screen.component.html',
  styleUrls: ['./selection-screen.component.css']
})
export class SelectionScreenComponent implements OnInit {

  cards: string[] = [
      "this should be a card",
      "this too"
  ];


  constructor() { }

  ngOnInit() {
  }

}
