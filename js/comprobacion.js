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