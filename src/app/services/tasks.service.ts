import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Task } from '../models/task';
import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class TaskService {
  private headers = new Headers();

  constructor(private auth: Angular2TokenService) {
    this.auth.currentAuthHeaders.append('Content-Type', 'application/json')
  }

  getTasks(project_id: number): Promise<Array<Task>> {
    return this.auth.get(this.url(project_id)).toPromise().then((response) => {
        return response.json() as Task[];
      }).catch(this.handleError);
  }

  getTask(project_id: number, id: number): Promise<Task> {
    return this.auth.get(this.url(project_id) + `/${id}`).toPromise().then((response) => {
      return response.json().data as Task;
    }).catch(this.handleError);
  }

  save(task: Task): Promise<Task> {
    return task.id ? this.put(task) : this.post(task);
  }

  delete(task: Task): Promise<Response> {
    const url = `${this.url(task.project_id)}/${task.id}`;

    return this.auth
      .delete(url)
      .toPromise()
      .catch(this.handleError);
  }

  // Add new Task
  private post(task: Task): Promise<Task> {
    return this.auth
      .post(this.url(task.project_id), {task: task})
      .toPromise()
      .then(res => res.json() as Task)
      .catch(this.handleError);
  }

  // Update existing Task
  private put(task: Task): Promise<Task> {
    const url = `${this.url(task.project_id)}/${task.id}`;

    return this.auth
      .put(url, {task: task})
      .toPromise()
      .then(() => task)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error(error);
    return Promise.reject(error.message || error.json().errors);
  }

  private url(project_id: number): string {
    return `api/v1/projects/${project_id}/tasks`
  }
}
