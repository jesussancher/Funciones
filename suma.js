function Suma() {
    event.preventDefault()
    const html = document.getElementById("result")
    let as = document.getElementById("a")
    let bs = document.getElementById("b")
    const suma = parseInt(as.value) + parseInt(bs.value);
    html.innerHTML = suma
}

