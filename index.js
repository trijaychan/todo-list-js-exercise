class Task {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.complete = false;
  }

  markCompleted() {
    this.complete = true;
  }

  logState() {
    console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
  }
}

// DRIVER CODE BELOW

const task1 = new Task("Clean Cat Litter", "Clean out litter box"); // task 0
const task2 = new Task("Do Laundry", "bruh"); // task 1
const tasks = [task1, task2];

task1.logState();
task1.markCompleted();
task1.logState();

console.log(tasks);
