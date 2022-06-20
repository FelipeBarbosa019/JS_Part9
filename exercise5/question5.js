const btn = document.querySelector ("#submit")
const result = document.querySelector ("h3")
let x = 1
let testValue = 0
let n = 0
let c = 0

btn.addEventListener("click", run)

function sum(a, b) {
    return (a + b)  
}

function division (x,y){
    c = 0
    testValue = multiplication(y,n)
    n = sum(n,1)
    if (testValue>x){
        return (sum(n,-2))
    }
    else {
        return division (x,y)
    }
}

function multiplication(a,b) {
    if (b<=0) {
        return c
    }
    else {
        c = sum(c,a)
        return multiplication(a,sum(b,-1))
    }
}

function run() {
    const num1 = Number(document.querySelector("#num1").value)
    const num2 = Number(document.querySelector("#num2").value)
    const checkInt1 = Number.isInteger(num1)
    const checkInt2 = Number.isInteger(num2)

    try {
        if (!checkInt1 || !checkInt2 || num1 == '' || num1<0 || num2<0 || num2 > num1) {
            throw `[divide] Impossible to divide ${num1} / ${num2}`
        }
        if (num2 == 0) throw `[divide] Division by zero`
        const ans = division(num1,num2)
        result.textContent = `O resultado inteiro mais próximo é ${ans}.` 
        result.style.color = "#00ff00"
        result.style.backgroundColor = "#000000"
        n=0
        c = 0;
    } catch (error) {
        result.textContent = error
        result.style.color = "#ff0000"
        result.style.backgroundColor = "#000000"
    }
}