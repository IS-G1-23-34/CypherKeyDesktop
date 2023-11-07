document.getElementById("generate").addEventListener("click", function() {
    const length = document.getElementById("passwordLength").value
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }

    document.getElementById("password").textContent = password ;
});


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
    copyMessage.style.display = "block";

    // Ocultar el mensaje
    setTimeout(function() {
        copyMessage.style.display = "none";
    }, 500);


})