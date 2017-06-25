import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  private authMode: 'login' | 'register' = 'login';

  constructor() { }

  ngOnInit() {
  }

  onLoginFormResult(e) {
    if (e.signedIn) {
      console.log(e)
    } else {
      alert(e.err.json().errors[0])
    }
  }

  onRegisterFormResult(e) {
    if (e.signedUp) {
      console.log(e)
    } else {
      alert(e.err.json().errors.full_messages[0])
    }
  }

  isLoginMode() {
    return this.authMode === 'login'
  }
  isRegisterMode() {
    return this.authMode === 'register'
  }

}
