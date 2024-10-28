function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (nombre === "") {
        alert("El campo de nombre completo es obligatorio.");
        return false;
    }

    if (nombre = (/^[A-Za-z]+$/)){

        const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor ingresa un correo electrónico válido.");
            return false;
        }
        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            return false;
        }
        
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (!passwordRegex.test(password)) {
            alert("La contraseña debe contener al menos una letra y un número.");
            return false;
        }

        
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return false;
        }

        alert("¡Registro exitoso!");
        return true;
    }

    alert("El nombre solo puede contener letras");
}