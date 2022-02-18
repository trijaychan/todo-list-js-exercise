function newTask(title, description) {
  const task = {
    title,
    description,
    complete: false,

    markCompleted: function() {
      this.complete = true;
    },

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  };

  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Clean out litter box"); // task 0
const task2 = newTask("Do Laundry", "bruh"); // task 1
const tasks = [task1, task2];

task1.logState();
task1.markCompleted();
task1.logState();

console.log(tasks);
