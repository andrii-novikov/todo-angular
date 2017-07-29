import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../models/task';
import {TaskService} from '../../services/tasks.service';
import {Project} from '../../models/project';

@Component({
  selector: 'app-project-info-form',
  templateUrl: './project-info-form.component.html',
  styleUrls: ['./project-info-form.component.css']
})

export class ProjectInfoFormComponent {
  @Input() project: Project;
  @Output() onTaskAdd = new EventEmitter<Task>();

  private errors: false | Object;
  private task: Task = new Task();

  constructor(private taskService: TaskService) { }

  onSubmit() {
    this.errors = false;
    this.task.project_id = this.project.id;
    this.taskService.save(this.task).then((data) => this.onSuccess(data)).catch((data) => this.onFailure(data))
  }

  onSuccess(task) {
    this.onTaskAdd.emit(task);
    this.task = new Task();
    this.task.project_id = this.project.id;
  }

  onFailure(errors) {
    this.errors = errors
  }

  hasErrors() {
    return !!this.errors
  }
}
