const btn = document.querySelector ("#submit")
const result = document.querySelector ("h3")

btn.addEventListener("click", soma)

function soma() {
    const num1 = Number(document.querySelector("#num1").value) 
    const num2 = Number(document.querySelector("#num2").value)
    const checkInt1 = Number.isInteger(num1)
    const checkInt2 = Number.isInteger(num2)

    try {
        if (!checkInt1 || !checkInt2 || num1 == '' || num2 == '' || num1<0 || num2<0) throw `[sum] Impossible to sum ${num1} + ${num2}`
        const sum = num1 + num2;
        result.textContent = `O resultado é ${sum}.` 
        result.style.color = "#00ff00"
        result.style.backgroundColor = "#000000"
    } catch (error) {
        result.textContent = error
        result.style.color = "#ff0000"
        result.style.backgroundColor = "#000000"
    }
}

