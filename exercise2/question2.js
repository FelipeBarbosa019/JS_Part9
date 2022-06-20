const btn = document.querySelector ("#submit")
const result = document.querySelector ("h3")
let ans = 0;
let cont = 0;

btn.addEventListener("click", run)

function sum(a, b) {
    return (a + b)  
}

function subtract(num1, num2) {
    cont = num2
    if (num1 > cont) {
        ans = sum(ans, 1)
        cont = sum(cont, 1)
        return subtract (num1, cont)
    } else {
        return ans
    }
}

function run() {
    const num1 = Number(document.querySelector("#num1").value)
    const num2 = Number(document.querySelector("#num2").value)
    const checkInt1 = Number.isInteger(num1)
    const checkInt2 = Number.isInteger(num2)

    try {
        if (!checkInt1 || !checkInt2 || num1 == '' || num2 == '' || num1<0 || num2<0 || num1<num2) {
            throw `[subtract] Impossible to subtract ${num1} - ${num2}` 
        }
        const test = subtract(num1, num2)
        result.textContent = `O resultado é ${test}.`
        ans = 0
        result.style.color = "#00ff00"
        result.style.backgroundColor = "#000000"
    } catch (error) {
        result.textContent = error
        result.style.color = "#ff0000"
        result.style.backgroundColor = "#000000"
    }
}