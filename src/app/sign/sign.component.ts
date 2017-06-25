import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  private authMode: 'login' | 'register' = 'login';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() { this.authMode = 'login'; }
  register() { this.authMode = 'register'; }

  onFormResult(e) {
    console.log(e);
    if (e.signed) {
      this.router.navigate(['projects']);
    } else {
      alert(e.err.json().errors[0])
    }
  }

  isLoginMode() {
    return this.authMode === 'login'
  }
  isRegisterMode() {
    return this.authMode === 'register'
  }

}
