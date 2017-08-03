export interface TaskInterface {
  id: number;
  name: string;
  project_id: number;
  status: string;
  deadline: Date;
  order: number;
}

export class Task implements TaskInterface {
  id: number;
  name: string;
  project_id: number;
  status: string;
  deadline: Date;
  order: number;

  public static collection(data: Array<TaskInterface>) {
    return data.map((task) => new Task(task))
  }

  constructor(data?: TaskInterface) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.project_id = data.project_id;
      this.status = data.status;
      this.deadline = data.deadline;
      this.order = data.order;
    }
  }

  start() {
    if (this.isOnHold()) {
      this.status = 'in_progress';
      return true;
    } else {
      return false;
    }
  }

  finish() {
    if (this.isInProgress()) {
      this.status = 'completed';
      return true;
    } else {
      return false;
    }
  }

  isOnHold() {
    return this.status === 'on_hold';
  }

  isInProgress() {
    return this.status === 'in_progress'
  }

  isCompleted() {
    return this.status === 'completed'
  }
}
