import {Task} from 'app/models/task';

export class Project {
  id: number;
  name: string;
  tasks: Array<Task>;
}
