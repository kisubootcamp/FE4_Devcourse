<template>
  <div class="calculator">
    <div class="display">
      <div class="previous-operand">{{ calcArr.join("") }}</div>
      <div class="current-operand">{{ inputNumber }}</div>
    </div>
    <button class="span-two" @click="handleAC">AC</button>
    <button @click="handleDelete">DEL</button>
    <button class="operation" @click="divideNumber">÷</button>
    <button @click="handleNumber(7)">7</button>
    <button @click="handleNumber(8)">8</button>
    <button @click="handleNumber(9)">9</button>
    <button class="operation" @click="multiplyNumber">×</button>
    <button @click="handleNumber(4)">4</button>
    <button @click="handleNumber(5)">5</button>
    <button @click="handleNumber(6)">6</button>
    <button class="operation" @click="subtractNumber">-</button>
    <button @click="handleNumber(1)">1</button>
    <button @click="handleNumber(2)">2</button>
    <button @click="handleNumber(3)">3</button>
    <button class="operation" @click="addNumber">+</button>
    <button class="span-two" @click="handleNumber(0)">0</button>
    <button @click="buttonDot">.</button>
    <button class="operation equals" @click="calcResult">=</button>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  props: {
    calcArr: {
      type: Array,
    },
    result: {
      type: Function,
    },
    inputNumber: {
      type: Number,
    },
    handleAC: {
      type: Function,
    },
    handleNumber: {
      type: Function,
    },
    addNumber: {
      type: Function,
    },
    subtractNumber: {
      type: Function,
    },
    divideNumber: {
      type: Function,
    },
    multiplyNumber: {
      type: Function,
    },
    calcResult: {
      type: Function,
    },
    buttonDot: {
      type: Function,
    },
    handleDelete: {
      type: Function,
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
