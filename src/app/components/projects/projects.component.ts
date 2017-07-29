import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/projects.service'
import { Project } from '../../models/project'
import {isUndefined} from "util";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Array<Project>;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.setProjects();
  }

  setProjects(): void {
    this.projectService.getProjects().then((projects) => {
      this.projects = projects
    })
  }

  addProject(): void {
    this.projects.push(new Project())
  }

  handleDestroy(project: Project): void {
    this.projects = this.projects.filter((p) => p.id !== project.id)
  }

  handleUpdate(project: Project): void {
    this.projects.find(p => !p.id && p.name === project.name).id = project.id
    console.log(this.projects)
  }

}
