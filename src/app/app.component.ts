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
  }

  ngOnInit(): void {
  }

}
