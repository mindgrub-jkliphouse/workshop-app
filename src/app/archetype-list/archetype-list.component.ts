import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-archetype-list',
  templateUrl: './archetype-list.component.html',
  styleUrls: ['./archetype-list.component.css']
})
export class ArchetypeListComponent implements OnInit {

  @Input() models: any[] = [];


  constructor() { }

  ngOnInit() {
  }

}
