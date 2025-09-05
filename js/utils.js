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

function identificarLetraA(nombresSeparados)
{
    let nombresConA = [];
    for(let i = 0; i < nombresSeparados.length; i++)
    {
        if(nombresSeparados[i].startsWith("A") || nombresSeparados[i].startsWith("a"))
        {
            nombresConA.push(nombresSeparados[i]);
        }
    }
    return nombresConA;
}

function cadenaNueva(texto, palabraAReemplazar, palabraReemplazo)
{   
    let nuevoTexto;
    if(texto.includes(palabraAReemplazar))
    {
        nuevoTexto = texto.replace(palabraAReemplazar, palabraReemplazo); 
    }
    else{
        nuevoTexto = "La palabra a reemplazar no existe";
    }
    return nuevoTexto;
}

