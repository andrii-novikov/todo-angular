import { Component, OnInit } from '@angular/core';
import { ProjectService } from './services/projects.service'
import { Project } from './models/project'
import {Angular2TokenService} from 'angular2-token';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ToDo';
  projects: Array<Project>;

  constructor(private projectService: ProjectService, private authToken: Angular2TokenService) {
    this.authToken.init(environment.token_auth_config);

    this.authToken.signIn({email: 'a@a.ru', password: '12345678'}).subscribe(

      res => {

        console.log('auth response:', res);
        console.log('auth response headers: ', res.headers.toJSON()); // log the response header to show the auth token
        console.log('auth response body:', res.json()); // log the response body to show the user
      },

      err => {
        console.error('auth error:', err);
      }
    )
  }

  ngOnInit(): void {
  }

}
