import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Project } from '../models/project';

@Injectable()
export class ProjectService {
  private url = 'http://localhost:3000/api/v1/projects';  // URL to web api
  private headers = new Headers();

  constructor(private http: Http) {
    this.headers.append('Content-Type', 'application/json');
  }

  getProjects(): Promise<Array<Project>> {
    return this.http.get(this.url, this.headers).toPromise().then((response) => {
        return response.json() as Project[];
      }).catch(this.handleError);
  }

  getProject(id: number): Promise<Project> {
    return this.http.get(this.url + `/${id}`, this.headers).toPromise().then((response) => {
      return response.json().data as Project;
    }).catch(this.handleError);
  }

  save(project: Project): Promise<Project> {
    if (project.id) {
      return this.put(project);
    }
    return this.post(project);
  }

  delete(project: Project): Promise<Response> {
    const url = `${this.url}/${project.id}`;

    return this.http
      .delete(url, { headers: this.headers })
      .toPromise()
      .catch(this.handleError);
  }

  // Add new Project
  private post(project: Project): Promise<Project> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.url, JSON.stringify(project), { headers: headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  // Update existing Project
  private put(project: Project): Promise<Project> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.url}/${project.id}`;

    return this.http
      .put(url, JSON.stringify(project), { headers: headers })
      .toPromise()
      .then(() => project)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
