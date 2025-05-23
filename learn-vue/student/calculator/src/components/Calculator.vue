<template>
  <div class="calculator">
    <div class="display">
      <div class="previous-operand">{{ preCal }}</div>
      <div class="current-operand">{{ currentOperand }}</div>
    </div>
    <button class="span-two" @click="clickAC">AC</button>
    <button @click="clickDEL">DEL</button>
    <button class="operation" @click="clickOperation">÷</button>
    <button @click="clickNumber">7</button>
    <button @click="clickNumber">8</button>
    <button @click="clickNumber">9</button>
    <button class="operation" @click="clickOperation">×</button>
    <button @click="clickNumber">4</button>
    <button @click="clickNumber">5</button>
    <button @click="clickNumber">6</button>
    <button class="operation" @click="clickOperation">-</button>
    <button @click="clickNumber">1</button>
    <button @click="clickNumber">2</button>
    <button @click="clickNumber">3</button>
    <button class="operation" @click="clickOperation">+</button>
    <button class="span-two" @click="clickNumber">0</button>
    <button @click="clickNumber">.</button>
    <button class="operation equals" @click="clickEquals">=</button>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data() {
    return {
      selectedNumber: '',
      preCal: '',
      selectedOperation: '',
    };
  },
  computed: {
    currentOperand() {
      return this.selectedNumber || '0';
    },
  },
  methods: {
    clickNumber(e) {
      const value = e.target.textContent;

      if (value === '.') {
        if (this.selectedNumber.includes('.')) return;
        if (this.selectedNumber === '') {
          this.selectedNumber = '0.';
          return;
        }
      }

      this.selectedNumber += value;
      console.log(this.selectedNumber);
    },
    clickOperation(e) {
      const newOperation = e.target.textContent;

      if (this.selectedNumber === '') {
        if (this.preCal === '') {
          this.preCal = '0' + newOperation;
        } else {
          this.preCal = this.preCal.substring(0, this.preCal.length - 1) + newOperation;
        }
        this.selectedOperation = newOperation;
        return;
      }

      if (this.preCal !== '' && this.selectedNumber !== '') {
        const result = this.handleEquals();
        this.preCal = String(result) + newOperation;
        this.selectedNumber = '';
        this.selectedOperation = newOperation;
        return;
      }

      if (this.selectedNumber === '') {
        this.selectedNumber = '0';
      }

      this.selectedOperation = newOperation;
      this.preCal = this.selectedNumber + newOperation;
      this.selectedNumber = '';
    },
    handleEquals() {
      const preNum = this.preCal.substring(0, this.preCal.length - 1);
      const operation = this.preCal[this.preCal.length - 1];
      this.selectedNumber = Number(this.selectedNumber);
      return this.handleCalculator(operation, Number(preNum), this.selectedNumber);
    },
    clickEquals() {
      if (!this.preCal) return;
      const result = this.handleEquals();
      this.selectedNumber = String(result);
      this.preCal = '';
    },
    handleCalculator(operation, num1, num2) {
      switch (operation) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '×':
          return num1 * num2;
        case '÷':
          return num1 / num2;
        default:
          return num2;
      }
    },
    clickAC() {
      this.selectedNumber = '';
      this.preCal = '';
      this.selectedOperation = '';
    },
    clickDEL() {
      if (this.selectedNumber.length > 0) {
        this.selectedNumber = this.selectedNumber.substring(0, this.selectedNumber.length - 1);
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
