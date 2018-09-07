import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  // constructor(private service: CommunicationService) { }
  formConfig = [
    {type: 'text', label: 'UserName', name: 'userName', constraint: Validators.required},
    {type: 'password', label: 'Password', name: 'passWord', constraint: Validators.required}
  ];

  constructor(private route: Router, private service: CommunicationService, private frmBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.frmBuilder.group({});
    this.formConfig.forEach(eachControl => {
      this.loginForm.addControl(eachControl.name, new FormControl('', eachControl.constraint));
    });
  }

  login() {
    console.log(this.loginForm.value);
    console.log('user logged');
    this.service.changeMessage('logged');
    if (this.loginForm.value.userName === 'india' && this.loginForm.value.passWord === 'india') {
      sessionStorage.setItem('userLogged', 'true');
      this.route.navigate(['/restaurant']);
      console.log('Hello');
    }

  }
}
