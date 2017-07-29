import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'app/models/project'
import {Task} from '../../models/task';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {

  @Input() project: Project;

  constructor() { }

  ngOnInit() {
  }

  handleTaskAdd(task: Task) {
    this.project.tasks.push(task)
  }
}
