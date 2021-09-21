import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
// @ts-ignore
import {Parse} from "parse";
import {AuthService} from "../../model/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup = this.formBuilder.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });
  isLoading: boolean = false;
  hasError:boolean=false;

  constructor(private formBuilder: FormBuilder, private router: Router, private auth: AuthService) {

  }

  ngOnInit(): void {

    /*  const currentUser = Parse.User.current();
      if (currentUser) {
        console.log(currentUser);
        // do stuff with the user
      } else {
        // show the signup or login page
      }*/
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  async onSubmitForm() {
    this.hasError=false;
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.auth.authenticate(this.loginForm.getRawValue(), () => {
        this.isLoading = false;
        this.router.navigateByUrl('/admin/products');
      }, () => {
        this.isLoading = false;
        this.hasError=true;
      });
    } else {
    }


  }
}
