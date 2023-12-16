const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const cadenaInput = document.getElementById('cadena');
    const cadena = cadenaInput.value;

    // Realizar la solicitud POST a la API
    try {
        const response = await fetch('http://localhost:8080/api/comprobacion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: "cadena=" + cadena
        });

        if (response.ok) {
            const resultado = await response.json();
            if (resultado) {
                showToast('liveToastSeguro'); // Mostrar mensaje de contraseña segura
            } else {
                showToast('liveToastNoSeguro'); // Mostrar mensaje de contraseña no segura
            }
        } else {
            console.error('Error en la solicitud');
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
});

// Función para mostrar los mensajes Toast
function showToast(id) {
    const toast = document.getElementById(id);
    const bsToast = new bootstrap.Toast(toast);
    bsToast.show();
}

document.getElementById("cadena")
    .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("comprobacion-btn").click();
        }
        check()
    });

function check() {
    const cadena = document.getElementById("cadena").value
    if (cadena !== "") {
        const newDiv = document.createElement("div")
        let secure = true
        newDiv.classList.add('alert')
        newDiv.classList.add('alert-danger')
        newDiv.classList.add('mt-2')
        newDiv.role = 'alert'
        newDiv.id = 'alerta'
        if (cadena.length < 8) {
            newDiv.appendChild(document.createTextNode("La longitud es menor que 8"))
            newDiv.appendChild(document.createElement('br'))
            secure = false
        }
        if (!/[A-Z]+/.test(cadena)) {
            newDiv.appendChild(document.createTextNode("No contiene mayusculas"))
            newDiv.appendChild(document.createElement('br'))
            secure = false
        }
        if (!/[a-z]+/.test(cadena)) {
            newDiv.appendChild(document.createTextNode("No contiene minusculas"))
            newDiv.appendChild(document.createElement('br'))
            secure = false
        }
        if (!/[0-9]+/.test(cadena)) {
            newDiv.appendChild(document.createTextNode("No contiene numeros"))
            newDiv.appendChild(document.createElement('br'))
            secure = false
        }
        if (!/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(cadena)) {
            newDiv.appendChild(document.createTextNode("No contiene caracteres especiales"))
            secure = false
        }
        if (document.getElementById("alerta") != null) {
            document.getElementById("alerta").remove()
        }
        if (!secure) {
            document.getElementById("submit-btn").appendChild(newDiv)
        }
    }
}