import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // data = "Your perfect banking partner "

  acno: any;
  // psw:any

  // constructor(private ds:DataService) {      service

  // }

  constructor(private rout: Router, private fb: FormBuilder) {

  }
  loginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],

  })

  ngOnInit(): void { }

  login() {
    // this.uname = uname.value;              3rd method  # template rending variable 
    // this.psw = psw.value;                        #varibale name in html to acccess
    // console.log(this.uname, this.psw);             to access the data from html to view
    // console.log(this.acno, this.psw);   
    if (this.loginForm.valid) {
      this.rout.navigateByUrl('Home')
    }

    else {
      alert("Invalid form ")
    }
  }
  // alert(this.ds.checkdata())
}

  // unamechange(event:any ) {
    // console.log(event.target.value);  1st method event bindiing  (click)
    // this.uname=(event.target.value)  2nd method  $(event) data binding  (change)
  // }
// }
