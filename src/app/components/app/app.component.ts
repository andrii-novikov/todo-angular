import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/projects.service'
import { Project } from '../../models/project'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ToDo';
  projects: Array<Project>;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjects().then(projects => {
      this.projects = projects;
    })
  }

}
