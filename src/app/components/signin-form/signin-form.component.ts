import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Angular2TokenService} from 'angular2-token';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css']
})
export class SigninFormComponent implements OnInit {

  signInUser = { email: '', password: '' };

  @Output() onFormResult = new EventEmitter<any>();
  constructor( private tokenAuthService: Angular2TokenService ) { }

  ngOnInit() {
  }

  onSignInSubmit() {

    this.tokenAuthService.signIn(this.signInUser).subscribe(

      res => {
        if (res.status === 200) {
          this.onFormResult.emit({signed: true, res});
        }
      },

      err => {
        this.onFormResult.emit({signed: false, err});
      }
    )

  }

}
