class Chronometer {
  constructor() {
    this.currentTime = 0;
    thisIntervalId = null;
  }

  start(callback) {
    setIntervalD(() => {
      this.currentTime += 1;
      if (typeof callback === 'function') {
        callback();
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60) | 0;
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    return value < 10 ? `0${value}` : value;
  }

  stop() {
    clearInterval(this.IntervalId);
    this.IntervalId = null;
  }

  reset() {
    if (this.IntervalId) return;
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}: ${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
