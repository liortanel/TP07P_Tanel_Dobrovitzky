function calcularEdadUsuario() {
    const nombre = prompt("¿Cuál es tu nombre?");
    const fechaNacimiento = prompt("¿Cuál es tu fecha de nacimiento? (formato YYYY-MM-DD)");
    const edad = calcularEdad(fechaNacimiento);
    const mensaje = `Hola ${nombre}, tienes ${edad} años!`;
    console.log(mensaje);
    mostrarResultado(mensaje);
}

function tirandoFruta() {
    const frutas = [
        "manzana",
        "banana",
        "naranja",
        "pera",
        "frutilla",
        "kiwi",
        "mango",
        "sandía",
        "durazno",
        "uva"
    ];

    console.log("Lista de frutas disponibles:");
    frutas.forEach((fruta, index) => {
        console.log(`${index + 1}. ${fruta}`);
    });

    const frutaBuscada = prompt("¿Qué fruta estás buscando?").toLowerCase();

    if (frutas.includes(frutaBuscada)) {
        const mensaje = `¡Sí, tenemos ${frutaBuscada}!`;
        console.log(mensaje);
        mostrarResultado(mensaje);
    } else {
        const mensaje = `No, no tenemos ${frutaBuscada}.`;
        console.log(mensaje);
        mostrarResultado(mensaje);
    }
}

function compararDatosyTipos()
{
    const mensajeA = `A. 10 == '10': ${10 == '10'}`;
    const mensajeB = `B. 10 === '10': ${10 === '10'}`;
    const mensajeC = `C. typeof 10.6: ${typeof 10.6}`;
    const mensajeD = `D. true == 1: ${true == 1}`;

    const mensajeFinal = `${mensajeA}\n${mensajeB}\n${mensajeC}\n${mensajeD}`;

    console.log(mensajeFinal);
    mostrarResultado(mensajeFinal);
}

function mostrarCiudad() {
    const ciudad = {
        nombre: "Buenos Aires",
        fechaFundacion: "1580-02-02",
        poblacion: 3000000,
        extension: 203
    };

    let mensaje = "Claves del objeto ciudad:\n";
    for (const clave in ciudad) {
        mensaje += `${clave}\n`;
    }

    mensaje += "\nValores del objeto ciudad:\n";
    for (const clave in ciudad) {
        mensaje += `${ciudad[clave]}\n`;
    }
    console.log(mensaje);
    mostrarResultado(mensaje);
}

function dobleDeElementos(array) {
    const resultado = [];

    for (let i = 0; i < array.length; i++) {
        resultado.push(array[i] * 2);
    }

    console.log("Array original:", array);
    console.log("Array con elementos dobles:", resultado);

    mostrarResultado(`Array original: [${array.join(", ")}]\nArray doble: [${resultado.join(", ")}]`);
}

function trianguloDeAsteriscos() {
    let salida = "Triángulo rectángulo:\n";
    
    for (let i = 1; i <= 5; i++) {
        let fila = '';
        for (let j = 0; j < i; j++) {
            fila += '*';
        }
        salida += fila + '\n';
    }

    salida += "\nPirámide:\n";

    for (let i = 0; i < 5; i++) {
        const cantidadEspacios = 5 - 1 - i;
        const cantidadEstrellas = 2 * i + 1;

        const espacios = '-'.repeat(cantidadEspacios);
        const estrellas = '*'.repeat(cantidadEstrellas);

        const linea = espacios + estrellas + espacios;
        salida += linea + '\n';
    }
    mostrarResultado(salida);
}

function nombresConA() {
    const nombres = prompt("¿Cuáles son los nombres? (separalos por comas y sin espacios).");
    let nombresSeparados = nombres.split(",");
    let nombresFinal = identificarLetraA(nombresSeparados);
    mostrarResultado(nombresFinal);
    console.log(nombresFinal);
}

function reemplazarString()
{
    let texto = prompt("Escribí una cadena de texto.")
    const palabraAReemplazar = prompt("Ahora escribí la palabra que quieras reemplazar")
    const palabraReemplazo = prompt("¿Con qué palabra deseas reemplazarla?")
    const nuevoTexto = cadenaNueva(texto, palabraAReemplazar, palabraReemplazo);
    mostrarResultado(nuevoTexto);
    console.log(nuevoTexto);
}

function cortarString()
{
    let texto = prompt("Escribí una cadena de texto.")
    const numero = prompt("Ahora escribí la cantidad de caracteres que vas a mantener")
    let nuevoTexto = ""
    nuevoTexto = texto.slice(0, numero);
    mostrarResultado(nuevoTexto);
    console.log(nuevoTexto);
}