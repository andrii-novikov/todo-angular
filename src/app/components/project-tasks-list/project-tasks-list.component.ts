import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Task} from '../../models/task';
import {TaskService} from '../../services/tasks.service';

@Component({
  selector: 'app-project-tasks-list',
  templateUrl: './project-tasks-list.component.html',
  styleUrls: ['./project-tasks-list.component.css']
})
export class ProjectTasksListComponent implements OnInit {

  @Input() tasks: Array<Task>;
  @Output() tasksChange = new EventEmitter<Array<Task>>();

  constructor(private taskService: TaskService ) { }

  ngOnInit() {
  }

  startTask(task: Task): void {
    task.start();
    this.taskService.save(task).then(() => {
      this.tasksChange.emit(this.tasks)
    });
  }

  finishTask(task: Task): void {
    task.finish();
    this.taskService.save(task).then(() => {
      this.tasksChange.emit(this.tasks)
    });
  }


  destroyTask(task: Task): void {
    this.taskService.delete(task).then(() => {
      this.tasks = this.tasks.filter((t) => task.id !== t.id);
      this.tasksChange.emit(this.tasks)
    })
  }

  handleDrop(data) {
    this.tasks.map((task, index) => {
      if (index !== task.order) {
        task.order = index;
        this.taskService.save(task)
      }
    })
  }

  handleDateChange(task: Task) {
    this.taskService.save(task)
  }

}
