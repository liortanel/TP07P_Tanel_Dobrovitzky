function calcularEdad(fechaNacimientoStr) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimientoStr);

    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad;
}

function mostrarResultado(mensaje) {
    const div = document.getElementById('resultado');
    div.innerText = mensaje;
}

