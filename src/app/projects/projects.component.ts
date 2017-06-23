import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/projects.service'
import { Project } from '../models/project'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Array<Project>;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
  }

}
