import {Task, TaskInterface} from 'app/models/task';

export interface ProjectInterface {
  id: number;
  name: string;
  tasks: Array<TaskInterface>;
}

export class Project implements ProjectInterface {
  id: number;
  name: string;
  tasks: Array<Task> = [];

  public static collection(data: Array<ProjectInterface>) {
    return data.map((project: ProjectInterface) => new Project(project))
  }

  constructor(data?: ProjectInterface) {
    if (data) {
      this.id = data.id
      this.name = data.name;
      this.tasks = Task.collection(data.tasks)
    }
  }
}
