<script>
import Calculator from "./components/Calculator.vue";

export default {
  name: "App",
  data() {
    return {
      inputNumber: 0,
      calcArr: [0],
      calculated: 0,
      usingDot: [],
    };
  },
  components: {
    Calculator,
  },
  methods: {
    handleAC() {
      this.inputNumber = 0;
      this.calcArr = [0];
      this.usingDot = [];
      console.log("0이지롱");
    },
    handleNumber(amount) {
      if (this.inputNumber === 0) {
        this.inputNumber = amount;
        console.log("숫자가 눌렸습니다");
      } else if (this.usingDot.includes(".")) {
        this.usingDot.push(amount);
        this.inputNumber = this.usingDot.join("");
      } else if (this.inputNumber > 0 && !this.usingDot.includes(".")) {
        this.inputNumber = this.inputNumber * 10 + amount;
      } else if (this.inputNumber < 0 && !this.usingDot.includes(".")) {
        this.inputNumber = this.inputNumber * 10 - amount;
      } else if (this.inputNumber.includes(".")) {
      }
      console.log(this.usingDot.includes("."));
    },
    addNumber() {
      if (this.calcArr[0] === 0) {
        this.calcArr.shift();
      }
      if (this.inputNumber > 0 || this.inputNumber < 0) {
        this.calcArr.push(this.inputNumber);
        this.calcArr.push("+");
        this.inputNumber = 0;
      } else if (this.calcArr[1] !== 0) {
        this.calcArr.push("+");
        this.inputNumber = 0;
      } else {
        return;
      }
      this.usingDot = [];
      console.log(this.calcArr);
    },
    subtractNumber() {
      if (this.calcArr[0] === 0) {
        this.calcArr.shift();
      }
      if (this.inputNumber > 0 || this.inputNumber < 0) {
        this.calcArr.push(this.inputNumber);
        this.calcArr.push("-");
        this.inputNumber = 0;
      } else if (this.calcArr[1] !== 0) {
        this.calcArr.push("-");
        this.inputNumber = 0;
      } else {
        return;
      }
      this.usingDot = [];
      console.log("빼기가 눌렸습니다");
    },
    divideNumber() {
      if (this.calcArr[0] === 0) {
        this.calcArr.shift();
      }
      if (this.inputNumber > 0 || this.inputNumber < 0) {
        this.calcArr.push(this.inputNumber);
        this.calcArr.push("÷");
        this.inputNumber = 0;
      } else if (this.calcArr[1] !== 0) {
        this.calcArr.push("÷");
        this.inputNumber = 0;
      } else {
        return;
      }
      this.usingDot = [];
      console.log("빼기가 눌렸습니다");
    },
    multiplyNumber() {
      if (this.calcArr[0] === 0) {
        this.calcArr.shift();
      }
      if (this.inputNumber > 0 || this.inputNumber < 0) {
        this.calcArr.push(this.inputNumber);
        this.calcArr.push("×");
        this.inputNumber = 0;
      } else if (this.calcArr[1] !== 0) {
        this.calcArr.push("×");
        this.inputNumber = 0;
      }
      this.usingDot = [];
      console.log("빼기가 눌렸습니다");
    },
    buttonDot() {
      if (this.usingDot.includes(".")) {
        return;
      }
      this.usingDot.push(this.inputNumber);
      this.usingDot.push(".");
      this.inputNumber = this.usingDot.join("");
      console.log(this.usingDot);
    },
    calcResult() {
      if (this.calcArr[this.calcArr.length - 1] === "+") {
        this.calcArr.push(this.inputNumber);
      } else if (this.calcArr[this.calcArr.length - 1] === "-") {
        this.calcArr.push(this.inputNumber);
      } else if (this.calcArr[this.calcArr.length - 1] === "×") {
        this.calcArr.push(this.inputNumber);
      } else if (this.calcArr[this.calcArr.length - 1] === "÷") {
        this.calcArr.push(this.inputNumber);
      } else {
        return;
      }
      console.log(this.calcArr.join(""));
      if (this.calcArr.includes("×")) {
        this.calculated = eval(this.calcArr.join("").replace("×", "*"));
        console.log(this.calculated);
      } else if (this.calcArr.includes("÷")) {
        this.calculated = eval(this.calcArr.join("").replace("÷", "/"));
      } else {
        this.calculated = eval(this.calcArr.join(""));
      }
      this.calculated =
        Math.round((this.calculated + Number.EPSILON) * 1000000) / 1000000;
      this.calcArr = [];
      this.calcArr.push(this.calculated);
      this.inputNumber = 0;
    },
    handleDelete() {
      this.inputNumber = 0;
    },
  },
};
</script>

<template>
  <div class="app-container">
    <Calculator
      :inputNumber
      :calcArr
      :handleAC="handleAC"
      :handleNumber="handleNumber"
      :addNumber="addNumber"
      :subtractNumber="subtractNumber"
      :divideNumber="divideNumber"
      :multiplyNumber="multiplyNumber"
      :calcResult="calcResult"
      :buttonDot="buttonDot"
      :handleDelete="handleDelete"
    />
  </div>
</template>

<style>
:root {
  --primary-color: #ff9f0a;
  --bg-light: #f2f2f7;
  --bg-dark: #1c1c1e;
  --text-light: #000000;
  --text-dark: #ffffff;
}

/* Apply dark mode styles */
@media (prefers-color-scheme: dark) {
  body {
    background-color: var(--bg-dark);
    color: var(--text-dark);
  }
}

body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  background-color: var(--bg-light);
  color: var(--text-light);
  transition: background-color 0.3s, color 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.app-container {
  max-width: 480px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  margin-bottom: 2rem;
  font-weight: 500;
  letter-spacing: -0.025em;
  font-size: 2rem;
}

footer {
  margin-top: 2rem;
  font-size: 0.8rem;
  opacity: 0.7;
}

@media (max-width: 480px) {
  .app-container {
    padding: 1rem;
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
}
</style>
