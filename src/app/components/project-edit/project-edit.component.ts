import {Component, Input, ViewChild, OnInit} from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/projects.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})

export class ProjectEditComponent implements OnInit {
  @Input() project: Project;
  @ViewChild('name') input;

  private edited = false;
  private errors: any = false;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    if (this.isNewProject()) {
      this.toggleEdit()
    }
  }

  toggleEdit(): void {
    this.edited = !this.edited;

    if (this.edited) {
      setTimeout(() => this.input.nativeElement.focus(), 1);
    }
  }

  onSubmit(): void {
    this.projectService.save(this.project).then((project) => this.onSuccess(project)).catch((errors) => this.errors = errors)
  }

  onSuccess(project) {
    if (this.isNewProject()) {
      this.project.id = project.id;
    }

    this.close()
  }

  hasErrors(): boolean {
    return !!this.errors
  }

  isNewProject(): boolean {
    return !this.project.id
  }

  close() {
    this.edited = false
  }

}
