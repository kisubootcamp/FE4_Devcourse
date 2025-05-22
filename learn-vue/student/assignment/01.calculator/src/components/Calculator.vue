<template>
  <h1>{{ total }}</h1>
  <div class="calculator">
    <div class="display">
      <div class="previous-operand">{{ prev.join(" ") }}</div>
      <div class="current-operand">{{ curr }}</div>
    </div>
    <button class="span-two" @click="reset">AC</button>
    <button @click="deleteNum">DEL</button>
    <button class="operation" @click="divide">÷</button>
    <button @click="() => clickNum('7')">7</button>
    <button @click="() => clickNum('8')">8</button>
    <button @click="() => clickNum('9')">9</button>
    <button class="operation" @click="multiply">×</button>
    <button @click="() => clickNum('4')">4</button>
    <button @click="() => clickNum('5')">5</button>
    <button @click="() => clickNum('6')">6</button>
    <button class="operation" @click="minus">-</button>
    <button @click="() => clickNum('1')">1</button>
    <button @click="() => clickNum('2')">2</button>
    <button @click="() => clickNum('3')">3</button>
    <button class="operation" @click="add">+</button>
    <button @click="() => clickNum('0')" class="span-two">0</button>
    <button @click="() => clickNum('.')">.</button>
    <button class="operation equals" @click="calculate">=</button>
  </div>
</template>

<!-- data, computed, methods만 사용 + 컴포넌트 생성, props 전달 -->
<script>
export default {
  name: "Calculator",
  data() {
    return {
      prev: [],
      curr: "0",
      total: 0,
    };
  },
  methods: {
    clickNum(num) {
      if (this.curr !== "0") {
        this.curr += num;
      } else if (num === ".") {
        this.curr += num;
      } else {
        this.curr = num;
      }
    },
    showPrev(value) {
      this.prev.push(this.curr);
      this.prev.push(value);
      this.curr = "0";
    },
    divide() {
      if (this.prev.length > 0) {
        this.calculate();
      }
      this.total /= Number(this.curr);
      this.showPrev("÷");
    },
    multiply() {
      if (this.prev.length > 0) {
        this.calculate();
      }
      this.total *= Number(this.curr);
      this.showPrev("×");
    },
    minus() {
      if (this.prev.length > 0) {
        this.calculate();
      }
      this.total -= Number(this.curr);
      this.showPrev("-");
    },
    add() {
      if (this.prev.length > 0) {
        this.calculate();
      }
      this.total += Number(this.curr);
      this.showPrev("+");
    },
    calculate() {
      if (this.prev[1] === "÷") {
        this.total = Number(this.prev[0]) / Number(this.curr);
      } else if (this.prev[1] === "×") {
        this.total = Number(this.prev[0]) * Number(this.curr);
      } else if (this.prev[1] === "-") {
        this.total = Number(this.prev[0]) - Number(this.curr);
      } else {
        this.total = Number(this.prev[0]) + Number(this.curr);
      }
      this.curr = String(this.total);
      this.prev = [];
    },
    reset() {
      this.prev = [];
      this.curr = "0";
      this.total = 0;
    },
    deleteNum() {
      if (this.curr.length === 1) {
        this.curr = "0";
      } else {
        this.curr = this.curr.slice(0, -1);
      }
    },
  },
};
</script>

<style scoped>
.calculator {
  margin: 0 auto;
  max-width: 400px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  background: #f9f9f9;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1px;
  transition: transform 0.2s;
}

@media (prefers-color-scheme: dark) {
  .calculator {
    background: #1c1c1e;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }
}

.display {
  grid-column: 1 / -1;
  background: #f1f1f1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  word-wrap: break-word;
  word-break: break-all;
  min-height: 100px;
  transition: background-color 0.3s;
}

@media (prefers-color-scheme: dark) {
  .display {
    background: #2c2c2e;
  }
}

.display .previous-operand {
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.display .current-operand {
  color: #000000;
  font-size: 2.5rem;
  font-weight: 500;
}

@media (prefers-color-scheme: dark) {
  .display .previous-operand {
    color: rgba(255, 255, 255, 0.6);
  }

  .display .current-operand {
    color: #ffffff;
  }
}

button {
  cursor: pointer;
  font-size: 1.5rem;
  border: none;
  outline: none;
  background: #e9e9eb;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  font-weight: 400;
  color: #000000;
  position: relative;
  overflow: hidden;
}

@media (prefers-color-scheme: dark) {
  button {
    background: #3a3a3c;
    color: #ffffff;
  }
}

button:hover {
  background: #d9d9db;
}

@media (prefers-color-scheme: dark) {
  button:hover {
    background: #4a4a4c;
  }
}

button:active {
  transform: scale(0.95);
}

button.span-two {
  grid-column: span 2;
}

button.operation {
  background: #ff9f0a;
  color: white;
}

button.operation:hover {
  background: #f08c00;
}

button.equals {
  background: #ff9f0a;
}

button.equals:hover {
  background: #f08c00;
}

@media (max-width: 480px) {
  .calculator {
    max-width: 100%;
    border-radius: 0;
  }

  button {
    padding: 15px;
    font-size: 1.2rem;
  }

  .display .current-operand {
    font-size: 2rem;
  }

  .display .previous-operand {
    font-size: 1.2rem;
  }
}
</style>
