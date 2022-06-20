const btn = document.querySelector ("#submit")
const result = document.querySelector ("h3")
let c = 0

btn.addEventListener("click", run)

function sum(a, b) {
    return (a + b)  
}

function multiplication(a, b) {
    if (b<=0) {
        return c
    }   
    else {
        c = sum (c,a)
        return multiplication(a,sum(b,-1))
    }
}

function run() {
    const num1 = Number(document.querySelector("#num1").value)
    const num2 = Number(document.querySelector("#num2").value)
    const checkInt1 = Number.isInteger(num1)
    const checkInt2 = Number.isInteger(num2)

    try {
        if (!checkInt1 || !checkInt2 || num1 == '' || num2 == '' || num1<0 || num2<0) {
            throw `[multiply] Impossible to multiply ${num1} * ${num2}`
        }
        const ans = multiplication(num1, num2)
        result.textContent = `O resultado é ${ans}.` 
        result.style.color = "#00ff00"
        result.style.backgroundColor = "#000000"
        c = 0;
    } catch (error) {
        result.textContent = error
        result.style.color = "#ff0000"
        result.style.backgroundColor = "#000000"
    }
}