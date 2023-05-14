import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // data = "Your perfect banking partner "
  uname: any;  
  psw:any

  constructor(){}
  ngOnInit(): void { }
  
  login(uname: any, psw: any) {
    // this.uname = uname.value;                # template rending variable 
    // this.psw = psw.value;                        #varibale name in html to acccess
    // console.log(this.uname, this.psw);             to access the data from html to view
    alert("you have logged in")                         
  }

  unamechange(event:any ) {
    // console.log(event.target.value);  1st method event bindiing  (click)
    // this.uname=(event.target.value)  2nd method  $(event) data binding  (change)
  }
}
