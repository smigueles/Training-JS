const NUMBER_OF_PROCESSES = 10; //Cantidad de procesos a ejecutar

//Cada proceso es una promesa con un tiempo random de resolución
const process = (n) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`Process n°: ${n}`);
    }, Math.random() * 1000);
  });
};

const createProcess = () => {
  const processes = [];
  for (let i = 0; i < NUMBER_OF_PROCESSES; i++) {
    processes.push(process(i));
  }
  return processes;
};

//Función constructora de Semaforo, cuenta con dos métodos para manejar un estado interno que indica el numero de procesos en curso, solo puede haber uno, el resto va a una cola y espera su turno a ser ejecutado.
function Semaphore() {
  this.inProgress = 0;
  this.queuedProcesses = [];
  this.up = () => this.inProgress++;
  this.down = () => this.inProgress--;
  this.exec = function (process) {
    process.then((res) => {
      console.log(res);
      this.down();
      this.repeat();
    });
  };
  this.repeat = function () {
    if (this.queuedProcesses.length > 0) {
      const nextProcess = this.queuedProcesses.shift();
      this.runTask(nextProcess);
    } else {
      console.log("All processes were terminated");
    }
  };
  this.runTask = function (task) {
    if (this.inProgress < 1) {
      this.up();
      this.exec(task);
    } else {
      this.queuedProcesses.push(task);
    }
  };
}

const semaphore = new Semaphore();
const arrayOfProcesses = createProcess();

arrayOfProcesses.forEach((task) => {
  semaphore.runTask(task);
});
