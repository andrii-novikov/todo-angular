import { Component, Input, ViewChild } from '@angular/core';
import { Project } from '../../models/project';
import {ProjectService} from '../../services/projects.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})

export class ProjectEditComponent {
  @Input() project: Project;
  @ViewChild('name') input;

  private edited = false;
  private errors: any = false;

  constructor(private projectService: ProjectService) { }

  toggleEdit(): void {
    this.edited = !this.edited;

    if (this.edited) {
      setTimeout(() => this.input.nativeElement.focus(), 1);
    }
  }

  onSubmit(): void {
    this.projectService.save(this.project).then(() => this.toggleEdit()).catch((errors) => this.errors = errors)
  }

  hasErrors(): boolean {
    return !!this.errors
  }

}
