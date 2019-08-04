import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor() {}
  submitted = false;
  name: string;

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  });

  ngOnInit() {}

  get f() {
    return this.contactForm.controls;
  }

  onClickSubmit() {
    this.submitted = true;
    console.log(this.contactForm.value);
  }
}
