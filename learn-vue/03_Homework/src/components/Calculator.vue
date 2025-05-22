<template>
    <div class="calculator">
        <div class="display">
            <div class="previous-operand">{{ display }}</div>
            <div class="current-operand">{{ input }}</div>
        </div>
        <button class="span-two" @click="allClear">AC</button>
        <button @click="deleteInput">DEL</button>
        <button class="operation" @click="clickOperator('÷')">÷</button>
        <button @click="clickNumber('7')">7</button>
        <button @click="clickNumber('8')">8</button>
        <button @click="clickNumber('9')">9</button>
        <button class="operation" @click="clickOperator('×')">×</button>
        <button @click="clickNumber('4')">4</button>
        <button @click="clickNumber('5')">5</button>
        <button @click="clickNumber('6')">6</button>
        <button class="operation" @click="clickOperator('-')">-</button>
        <button @click="clickNumber('1')">1</button>
        <button @click="clickNumber('2')">2</button>
        <button @click="clickNumber('3')">3</button>
        <button class="operation" @click="clickOperator('+')">+</button>
        <button class="span-two" @click="clickNumber('0')">0</button>
        <button @click="clickNumber('.')">.</button>
        <button class="operation equals" @click="calculate">=</button>
    </div>
</template>

<script>
export default {
    name: "Calculator",
    data() {
        return {
            display: "",
            input: "0",
        };
    },
    methods: {
        clickNumber(num) {
            if (num === ".") {
                if (this.input.includes(".")) {
                    return;
                } else if (this.input === "0") {
                    this.input = "0.";
                } else {
                    this.input += num;
                }
            } else {
                if (this.input === "0") {
                    this.input = num;
                } else {
                    this.input += num;
                }
            }
        },
        allClear() {
            this.display = "";
            this.input = "0";
        },
        deleteInput() {
            if (this.input.length === 1) {
                this.input = "0";
            } else {
                this.input = this.input.slice(0, this.input.length - 1);
            }
        },
        clickOperator(oper) {
            this.display = `${this.input} ${oper}`;
            this.input = "0";
        },
        calculate() {
            const [num1, oper] = this.display.split(" ");
            const num2 = this.input;

            const scale =
                10 **
                Math.max(
                    num1.split(".")[1]?.length || 0,
                    num2.split(".")[1]?.length || 0
                );

            switch (oper) {
                case "+": {
                    this.input = (
                        (+num1 * scale + +num2 * scale) /
                        scale
                    ).toString();
                    break;
                }
                case "-": {
                    this.input = (
                        (+num1 * scale - +num2 * scale) /
                        scale
                    ).toString();
                    break;
                }
                case "×": {
                    this.input = (+num1 * +num2).toString();
                    break;
                }
                case "÷": {
                    this.input = (+num1 / +num2).toString();
                    break;
                }
            }
            this.display = "";
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
