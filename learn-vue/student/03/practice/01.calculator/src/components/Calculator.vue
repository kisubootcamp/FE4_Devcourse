<template>
  <div class="calculator">
    <div class="display">
      <div class="previous-operand">{{ view }}</div>
      <div class="current-operand">{{ inputValue === '' ? 0 : inputValue }}</div>
    </div>
    <button class="span-two" @click="reset">AC</button>
    <button @click="deleteValue">DEL</button>
    <button class="operation" @click="inputOperation($event)">÷</button>
    <button @click="inputNum($event)">7</button>
    <button @click="inputNum($event)">8</button>
    <button @click="inputNum($event)">9</button>
    <button class="operation" @click="inputOperation($event)">×</button>
    <button @click="inputNum($event)">4</button>
    <button @click="inputNum($event)">5</button>
    <button @click="inputNum($event)">6</button>
    <button class="operation" @click="inputOperation($event)">-</button>
    <button @click="inputNum($event)">1</button>
    <button @click="inputNum($event)">2</button>
    <button @click="inputNum($event)">3</button>
    <button class="operation" @click="inputOperation($event)">+</button>
    <button class="span-two" @click="inputNum($event)">0</button>
    <button @click="inputNum($event)">.</button>
    <button class="operation equals" @click="resultValue">=</button>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data() {
    return {
      result: 0,
      view: '',
      inputValue: '',
      operation: '',
    };
  },
  methods: {
    // AC
    reset() {
      this.result = 0;
      this.inputValue = '';
      this.view = '';
      this.operation = '';
    },
    // DEL
    deleteValue() {
      const newValue = this.inputValue.slice(0, -1);
      this.inputValue = newValue;
    },
    // 숫자입력
    inputNum(event) {
      const newNum = this.inputValue + event.target.textContent;
      this.inputValue = newNum;
    },
    // 연산자입력
    inputOperation(event) {
      this.view = this.inputValue + event.target.textContent;
      this.result = Number(this.inputValue);
      this.inputValue = '';
      this.operation = event.target.textContent;
      console.log(this.operation);
    },
    // 결과 출력
    resultValue() {
      switch (this.operation) {
        case '+':
          this.result += Number(this.inputValue);
          break;
        case '-':
          this.result -= Number(this.inputValue);
          break;
        case '÷':
          this.result /= Number(this.inputValue);
          break;
        case '×':
          this.result *= Number(this.inputValue);
          break;
      }
      this.view = '';

      if (this.result.toString() === 'Infinity') {
        reset();
      } else if (this.result.toString() === '0') {
        this.inputValue = '';
      } else {
        this.inputValue = this.result.toString();
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
