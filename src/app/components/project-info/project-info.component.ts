import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Project } from 'app/models/project'
import {Task} from '../../models/task';
import {ProjectService} from '../../services/projects.service';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {

  @Input() project: Project;
  @Output() onDestroy = new EventEmitter<Project>();
  @Output() onUpdate = new EventEmitter<Project>();

  constructor(private projectsService: ProjectService) { }

  ngOnInit() {
  }

  handleTaskAdd(task: Task) {
    this.project.tasks.push(task)
  }

  handleUpdate(project: Project): void {
    this.onUpdate.emit(project)
  }

  deleteProject() {
    if (this.project.id) {
      this.projectsService.delete(this.project).then(() => this.onDestroy.emit(this.project))
    } else {
      this.onDestroy.emit(this.project)
    }
  }
}
