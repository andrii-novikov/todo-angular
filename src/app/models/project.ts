import {Task} from 'app/models/task';

export class Project {
  id: number;
  name = '';
  tasks: Array<Task> = [];
}
