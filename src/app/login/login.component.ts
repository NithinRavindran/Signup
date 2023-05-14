import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data = "Your perfect banking partner "
  
  constructor(){}
  ngOnInit(): void { }
  
  login() {
    alert("you have logged in")
  }

  unamechange(event:any ) {
    console.log(event.target.value)
  }
}
