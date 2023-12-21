class Count{
    constructor() {
      this.count = 0;
      this.intervalId = null;
      this.isAutoMode = false;
    }
  
    start() {
      if (!this.isAutoMode) {
        this.intervalId = setInterval(() => {
          this.count++;
          this.updateDisplay();
        }, 1000);
        this.isAutoMode = true;
      }
    }
  
    stop() {
      clearInterval(this.intervalId);
      this.isAutoMode = false;
    }
  
    increment() {
      this.stop();
      this.count++;
      this.updateDisplay();
    }
  
    decrement() {
      this.stop();
      this.count--;
      this.updateDisplay();
    }
  
    updateDisplay() {
      document.getElementById('count').innerText = this.count;
    }
  }
  
  const counter = new Count();
  
  document.getElementById('Button').addEventListener('click', () => {
    if (counter.isAutoMode) {
      counter.stop();
      document.getElementById('Button').innerText = 'Start';
    } else {
      counter.start();
      document.getElementById('Button').innerText = 'Stop';
    }
  });
  
  document.getElementById('increment').addEventListener('click', () => {
    counter.increment();
  });
  
  document.getElementById('decrement').addEventListener('click', () => {
    counter.decrement();
  });