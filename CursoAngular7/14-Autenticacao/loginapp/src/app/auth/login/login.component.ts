import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    'email' : ['', [Validators.required, Validators.email]],
    'password' : ['', [Validators.required, Validators.minLength(6)]],
  })
  constructor(private fb : FormBuilder,
    private authService : AuthService,
    private snackBar : MatSnackBar,
    private router : Router
    
    ) { }

  ngOnInit() {
  }

  onSubmit(){
    const credentials = this.loginForm.value;
    this.authService.login(credentials)
    .subscribe(
      (user) => {
        console.log(user);
        this.snackBar.open('Logged in successfuly ' 
        + user.firstname, 'OK', {duration: 2000} );
        this.router.navigateByUrl('/');
      },
      (err) => {
        console.log(err);
        this.snackBar.open('Error login ' , 'OK', {duration: 2000} );
        this.router.navigateByUrl('/');
        
      }
    )
  }

}
