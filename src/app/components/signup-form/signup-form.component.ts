import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Angular2TokenService} from 'angular2-token';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  signUpUser = {email: '', password: '', passwordConfirmation: ''};
  private errors = {};

  @Output() onFormResult = new EventEmitter<any>();

  constructor( private tokenAuthService: Angular2TokenService ) { }

  ngOnInit() {}


  onSignUpSubmit() {

    this.tokenAuthService.registerAccount(this.signUpUser).subscribe(

      (res) => {

        if (res.status === 200) {
          this.onFormResult.emit({signed: true, res})
        }

      },

      (err) => {
        const data = err.json();
        this.errors = data.errors || {};
        this.onFormResult.emit({signed: false, err});
      }
    )

  }
}
