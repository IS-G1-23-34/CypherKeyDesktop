let checkboxes = document.querySelectorAll('input[type="checkbox"]');
let miSelect = document.getElementById("selectNumero");

//Para marcar la opcion que llegue
function marcarOpcion(min, may, num, spe) {

    document.getElementById("checkmin").checked = min === "true";
    document.getElementById("checkmay").checked = may === "true";
    document.getElementById("checknum").checked = num === "true";
    document.getElementById("checkspe").checked = spe === "true";

}

function selectOption(option) {
    switch (option){
        case "personalizado":
            break;
        case "recomendado":
            miSelect.setAttribute("value", "14");
            document.getElementById('slider').value = 14;
            document.getElementById('selectNumero').value = 14;
            marcarOpcion("true", "true", "true", "true");
            break;
        case "legible":
            miSelect.setAttribute("value", "12");
            document.getElementById('slider').value = 12;
            document.getElementById('selectNumero').value = 12;
            marcarOpcion("true", "true", "true", "false");
            break;
        case "pin":
            miSelect.setAttribute("value", "4");
            document.getElementById('slider').value = 4;
            document.getElementById('selectNumero').value = 4;
            marcarOpcion("false", "false", "true", "false");
            break;
    }

}

function validarUltimaCheckbox() {
    let ultimaCheckbox = checkboxes[checkboxes.length - 1];
    let casillasActivadas = 0;
    document.getElementsByName("option")[0].checked = true;
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            casillasActivadas++;
        }
    });
    if(casillasActivadas <= 0){
        mostrarAlerta();
        return false;
    }
    return true;
}

function mostrarAlerta() {
    let alerta = document.getElementById('alertaNoCasillasActivas');
    let alerta2 = document.getElementById('alertaUnder8');
    let alerta3 = document.getElementById("copyMessage");
    alerta.style.display = 'block';
    alerta2.style.display = 'none';
    alerta3.style.display = 'none';
    setTimeout(function() {
        alerta.style.display = 'none';
    }, 3000); // Ocultar el toast después de 3 segundos
}



function updateNumber(value) {
    document.getElementsByName("option")[0].checked = true;
    document.getElementById('slider').value = value;
    alertaUnder8(value);
}

function updateSlider(value) {
    document.getElementsByName("option")[0].checked = true;
    document.getElementById('selectNumero').value = value;
    alertaUnder8(value);
}

function alertaUnder8(value){
    let alerta = document.getElementById('alertaUnder8');
    let alerta2 = document.getElementById('alertaNoCasillasActivas');
    let alerta3 = document.getElementById("copyMessage");
    if (value < 8) {
        // Mostrar el mensaje si no está en display
        if (alerta.style.display !== 'block') {
            alerta.style.display = 'block';
            alerta2.style.display = 'none';
            alerta3.style.display = 'none';
        }
    } else {
        // Ocultar el mensaje si el valor es mayor o igual a 8
        alerta.style.display = 'none';
    }
}
//Funcion para copiar portapapeles
document.getElementById("copyButton").addEventListener("click", function (){
    const password = document.getElementById("password");
    const passwordText= password.textContent;

    //Crear un elemento de entrada de texto temporal
    const tempInput = document.createElement("input");
    tempInput.setAttribute("value", passwordText);
    document.body.appendChild(tempInput);

    //Seleccionar y copiar el texto al portapapeles
    tempInput.select();
    document.execCommand("copy");

    //Eliminar temporal
    document.body.removeChild(tempInput);

    const copyMessage = document.getElementById("copyMessage");
    let alerta2 = document.getElementById('alertaNoCasillasActivas');
    let alerta3 = document.getElementById('alertaUnder8');
    copyMessage.style.display = "block";
    alerta2.style.display = 'none';
    alerta3.style.display = 'none';

    // Ocultar el mensaje
    setTimeout(function() {
        copyMessage.style.display = "none";
    }, 1500);


})

function generarPost() {
    data = "minusculas=" + (document.getElementsByName('minusculas')[0].checked).toString() +
        "&mayusculas=" + (document.getElementsByName('mayusculas')[0].checked).toString() +
        "&length=" + Number(document.getElementById('selectNumero').value) +
        "&specialChars=" + (document.getElementsByName('specialChars')[0].checked).toString() +
        "&numeros=" + (document.getElementsByName('numeros')[0].checked).toString() +
        "&option=" + Array.from(document.getElementsByName('option')).find(option => option.checked === true).value

    fetch("http://localhost:8080/api/generacion", {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: data,
    })
        .then((response) => response.text())
        .then((pass) => document.getElementById('password').innerText = pass);
}