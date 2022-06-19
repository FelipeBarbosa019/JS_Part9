const btn = document.querySelector ("#submit")
const result = document.querySelector ("h3")
let c = 0
let fixed

btn.addEventListener("click",exponentiation)

function sum(a,b,n) {
    if(n>1){ // n-1
        if (b==0) {
            b = fixed
            n = n - 1
            return sum(c,b-1,n)
        }
        else {
            c = c + a
            return sum(a,b-1,n)
        }
    }
    else return c 
}

function exponentiation() {
    const num1 = Number(document.querySelector("#num1").value)
    const num2 = Number(document.querySelector("#num2").value)
    fixed = num1;
    const checkInt1 = Number.isInteger(num1)
    const checkInt2 = Number.isInteger(num2)

    try {
        if (!checkInt1 || !checkInt2 || num1 == '' || num2 == '' || num1<0 || num2<0) {
            throw `[multiply] Impossible to multiply ${num1} * ${num2}`
        }
        const ans = sum(num1, num1, num2)
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