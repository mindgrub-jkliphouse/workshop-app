import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-character-name',
  templateUrl: './character-name.component.html',
  styleUrls: ['./character-name.component.css']
})
export class CharacterNameComponent implements OnInit {

  personBuilder: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.personBuilder = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      hobby: ['', Validators.required]
    });
  }

  createPerson(): void {
    console.log('Form Submitted ', this.personBuilder.value);
  }

}
