import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.css']
})


export class FilterButtonComponent implements OnInit {

    @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
