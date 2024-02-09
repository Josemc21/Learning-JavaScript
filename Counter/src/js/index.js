const boton_decrementar_contador = document.getElementById("boton_decrementar_contador");
const boton_resetear_contador = document.getElementById("boton_resetear_contador");
const boton_incrementar_contador = document.getElementById("boton_incrementar_contador");

boton_decrementar_contador.addEventListener("click", function () {
    const contador = document.querySelector(".contador_numero");
    contador.textContent = parseInt(contador.textContent) - 1;
    if (contador.textContent > 0) {
        contador.style.color = "green";
    } else if (contador.textContent < 0) {
        contador.style.color = "red";
    } else {
        contador.style.color = "black";
    }
});

boton_resetear_contador.addEventListener("click", function () {
    const contador = document.querySelector(".contador_numero");
    contador.textContent = 0;
    contador.style.color = "black";
});

boton_incrementar_contador.addEventListener("click", function () {
    const contador = document.querySelector(".contador_numero");
    contador.textContent = parseInt(contador.textContent) + 1;
    if (contador.textContent > 0) {
        contador.style.color = "green";
    } else if (contador.textContent < 0) {
        contador.style.color = "red";
    } else {
        contador.style.color = "black";
    }
});