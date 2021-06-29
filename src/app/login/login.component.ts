import {Component, OnInit} from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  documentsForm: any = '';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.documentsForm = this.formBuilder.group(
      {
        user: ['', Validators.required],
        password: ['', Validators.required],
      },
    );
  }

  send() {
    console.log(this.documentsForm);
  }
}
