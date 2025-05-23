<template>
  <div class="calculator">
    <div class="display">
      <div class="previous-operand">{{ renderStr }}</div>
      <div class="current-operand">{{ currentNum }}</div>
    </div>
    <button @click="reset" class="span-two">AC</button>
    <button @click="del">DEL</button>
    <button @click="clickOper('/')" class="operation">÷</button>
    <button @click="clickNum('7')">7</button>
    <button @click="clickNum('8')">8</button>
    <button @click="clickNum('9')">9</button>
    <button @click="clickOper('*')" class="operation">×</button>
    <button @click="clickNum('4')">4</button>
    <button @click="clickNum('5')">5</button>
    <button @click="clickNum('6')">6</button>
    <button @click="clickOper('-')" class="operation">-</button>
    <button @click="clickNum('1')">1</button>
    <button @click="clickNum('2')">2</button>
    <button @click="clickNum('3')">3</button>
    <button @click="clickOper('+')" class="operation">+</button>
    <button @click="clickNum('0')" class="span-two">0</button>
    <button @click="clickDot('.')">.</button>
    <button @click="calculate" class="operation equals">=</button>
  </div>
</template>

<script>
export default {
  name: 'CalculatorPractice',
  data() {
    return {
      currentNum: '0',
      prevNum: '0',
      renderStr: '0',
      operand: '',
    }
  },
  methods: {
    reset() {
      this.currentNum = '0'
      this.operand = ''
      this.prevNum = '0'
      this.renderStr = '0'
    },
    prevOperand(value) {
      this.operand = value
    },
    clickNum(value) {
      if (this.currentNum === '0') this.currentNum = value
      else this.currentNum += value
    },
    clickDot(value) {
      this.currentNum += value
    },
    clickOper(value) {
      this.operand = value
      if (value === '*') this.operand = '×'
      if (value === '/') this.operand = '÷'
      this.renderStr = this.currentNum + this.operand
      this.prevNum = this.currentNum
      this.currentNum = '0'
    },
    calculate() {
      if (this.operand === '+')
        this.currentNum = String(Number(this.prevNum) + Number(this.currentNum))
      else if (this.operand === '-')
        this.currentNum = String(Number(this.prevNum) - Number(this.currentNum))
      else if (this.operand === '×')
        this.currentNum = String(Number(this.prevNum) * Number(this.currentNum))
      else if (this.operand === '÷')
        this.currentNum = String((Number(this.prevNum) / Number(this.currentNum)).toFixed(3))
      this.renderStr = ''
    },
    del() {
      this.currentNum = this.currentNum.slice(0, -1)
    },
  },
}
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
