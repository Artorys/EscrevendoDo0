const h1 = document.querySelector("h1")
h1.innerText = "Hello World!!!"
const p = document.createElement("p")
p.innerText = "opa ze"
document.body.appendChild(p)
const newText = document.createTextNode(" opa maluco")
p.appendChild(newText)
