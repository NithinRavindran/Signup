import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // acno: any;
  // uname: any;
  // psw: any;

  pswcheck: any = false;


  constructor(private fb: FormBuilder, private ds: DataService,private rout:Router) { }

  SignupForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    cpsw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]
  })

  ngOnInit(): void {
  }
  signup() {
    // console.log(this.acno,this.uname,this.psw);
    // var modelPath = this.registerForm.value
    // console.log(modelPath.acno);
    // console.log(modelPath.uname);
    // console.log(modelPath.psw);
    // console.log(modelPath.cpsw);

    if (this.SignupForm.valid) {
      if (this.SignupForm.value.psw == this.SignupForm.value.cpsw) {
        this.ds.signupApi(this.SignupForm.value.acno, this.SignupForm.value.uname, this.SignupForm.value.psw)
          .subscribe((result: any) => {
          console.log(result);
            alert(result.message);
            this.rout.navigateByUrl('')
          },
            result => {
              alert(result.error.message);
            }
            )
      }
      else {
        this.pswcheck = true
        // alert('Confirm the password')
      }

    }
    else {
      alert("Invalid form ")
    }


  }
}
