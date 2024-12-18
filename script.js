
function mostrarSeccion(idSeccion) {
    const secciones = document.querySelectorAll('.content section');
    secciones.forEach(seccion => {
      seccion.style.display = 'none';
    });
    const seccionSeleccionada = document.getElementById(idSeccion);
    if (seccionSeleccionada) {
      seccionSeleccionada.style.display = 'block';
    }
  }
function calcular() {
    const n = parseInt(document.getElementById("numFactorial").value);
  
    if (isNaN(n) || n <= 0) {
      document.getElementById("resultadoFibonacci").innerHTML = "Por favor, ingrese un número válido.";
      return;
    }
  
    let a = 0, b = 1, resultado = [a];
    for (let i = 1; i < n; i++) {
      let temp = b;
      b = a + b;
      a = temp;
      resultado.push(a);
    }
  
    document.getElementById("resultadoFibonacci").innerHTML = `Serie de Fibonacci (${n} términos): <br> ${resultado.join(", ")}`;
  }
  function calcularBinario() {
    const n = parseInt(document.getElementById("numBinario").value);
  
    if (isNaN(n) || n <= 0) {
      document.getElementById("resultadoBinario").innerHTML = "Por favor, ingrese un número válido.";
      return;
    }
    let resultado = [];
    let currentNumber = 0;
    for (let i = 0; i < n; i++) {
      resultado.push(currentNumber.toString(2)); 
      currentNumber++; 
    }
    document.getElementById("resultadoBinario").innerHTML = `Serie Binaria Alternada (${n} términos): <br> ${resultado.join(", ")}`;
  }
function calcularFactoriales() {
    const numeroEntrada = document.getElementById("numeroSerie").value;
    const n = parseInt(numeroEntrada, 10);
    if (isNaN(n) || n <= 0) {
        document.getElementById("resultadoSerie").innerText = "Por favor, ingrese un número entero válido.";
        return;
    }
    let serieDeFactoriales = [];
    let sumaDeFactoriales = 0;
    for (let i = 1; i <= n; i++) {
        let factorial = 1;
        for (let j = 1; j <= i; j++) {
            factorial *= j;
        }
        serieDeFactoriales.push(`${i}! = ${factorial}`);
        sumaDeFactoriales += factorial;
    }
    document.getElementById("resultadoSerie").innerHTML = 
        `Serie de Factoriales: ${serieDeFactoriales.join(", ")}<br>Suma de la serie: ${sumaDeFactoriales}`;
 }
function rotarIzquierda() {
    const num = document.getElementById("numeroRotar").value;
    if (num === "" || isNaN(num)) {
      document.getElementById("resultadoRotar").innerText = "Por favor, ingrese un número válido.";
      return;
    }
    let numStr = num.toString();
    let rotado = numStr.slice(1) + numStr[0];
    document.getElementById("resultadoRotar").innerText = `Número rotado a la izquierda: ${rotado}`;
  }
  function rotarDerecha() {
    const num = document.getElementById("numeroRotar").value;
    if (num === "" || isNaN(num)) {
      document.getElementById("resultadoRotar").innerText = "Por favor, ingrese un número válido.";
      return;
    }
    let numStr = num.toString();
    let rotado = numStr[numStr.length - 1] + numStr.slice(0, -1);
    document.getElementById("resultadoRotar").innerText = `Número rotado a la derecha: ${rotado}`;
  }
function rotarDigitos() {
    const num = document.getElementById("numero").value;
    if (num.length < 6) {
        document.getElementById("resultadoRotar").innerText = "Por favor, ingrese un número con al menos 6 dígitos.";
        return;
    }
    let numStr = num.toString();
    let digitosPares = [];
    let indicesPares = [];
    for (let i = 0; i < numStr.length; i++) {
        if (parseInt(numStr[i]) % 2 === 0) {
            digitosPares.push(numStr[i]); 
            indicesPares.push(i); 
        }
    }
    if (digitosPares.length > 0) {
        let ultimo = digitosPares.pop(); 
        digitosPares.unshift(ultimo); 
        let numArray = numStr.split('');
        for (let i = 0; i < indicesPares.length; i++) {
            numArray[indicesPares[i]] = digitosPares[i];
        }
        let numeroFinal = numArray.join('');
        document.getElementById("resultadoRotar").innerText = `Número con dígitos pares rotados: ${numeroFinal}`;
    } else {
        document.getElementById("resultadoRotar").innerText = "No se encontraron dígitos pares para rotar.";
    }
 }
function rotarNumerosPares() {
    const numeroIngresado = document.getElementById("inputNumero").value;
    if (numeroIngresado.length < 6) {
        document.getElementById("resultadoRotacion").innerText = "Por favor, ingrese un número con al menos 6 dígitos.";
        return;
    }
    let numeroComoCadena = numeroIngresado.toString();
    let digitosPares = [];
    let indicesDePares = [];
    for (let i = 0; i < numeroComoCadena.length; i++) {
        if (parseInt(numeroComoCadena[i]) % 2 === 0) {
            digitosPares.push(numeroComoCadena[i]);
            indicesDePares.push(i);
        }
    }
    if (digitosPares.length > 0) {
        let ultimoPar = digitosPares.pop();
        digitosPares.unshift(ultimoPar);
        let numeroArray = numeroComoCadena.split('');
        for (let i = 0; i < indicesDePares.length; i++) {
            numeroArray[indicesDePares[i]] = digitosPares[i];
        }
        let numeroFinal = numeroArray.join('');
        document.getElementById("resultadoRotacion").innerText = `Número con dígitos pares rotados: ${numeroFinal}`;
    } else {
        document.getElementById("resultadoRotacion").innerText = "No se encontraron dígitos pares para rotar.";
    }
 }
function mostrarDigitosRepetidos() {
    const numeroStr = document.getElementById("numeroEntrada").value;
    if (numeroStr <= 100) {
        document.getElementById("resultadoDigitos").innerText = "Por favor, ingrese un número mayor a 100.";
        return;
    }
    let conteoDigitos = {};
    for (let i = 0; i < numeroStr.length; i++) {
        let digito = numeroStr[i];
        if (conteoDigitos[digito]) {
            conteoDigitos[digito]++;
        } else {
            conteoDigitos[digito] = 1;
        }
    }
    let digitosRepetidos = [];
    for (let digito in conteoDigitos) {
        if (conteoDigitos[digito] > 1) {
            digitosRepetidos.push(digito);
        }
    }
    if (digitosRepetidos.length > 0) {
        document.getElementById("resultadoDigitos").innerText = `Dígitos repetidos: ${digitosRepetidos.join(", ")}`;
    } else {
        document.getElementById("resultadoDigitos").innerText = "No hay dígitos repetidos en el número.";
    }
 }
function verificarCapicua() {
    const valorIngresado = document.getElementById("inputNumeroCapicua").value.trim();
    if (valorIngresado === "") {
        document.getElementById("mensajeResultadoCapicua").innerText = "Por favor, ingrese un número.";
        return;
    }
    const numeroTexto = valorIngresado.toString();
    const textoInvertido = numeroTexto.split('').reverse().join('');
    if (numeroTexto === textoInvertido) {
        document.getElementById("mensajeResultadoCapicua").innerText = `"${valorIngresado}" es un número capicúa.`;
    } else {
        document.getElementById("mensajeResultadoCapicua").innerText = `"${valorIngresado}" no es un número capicúa.`;
    }
}
function verificarPrimo() {
    const valorIngresado = document.getElementById("inputNumeroPrimo").value.trim();
    const numero = parseInt(valorIngresado);
    if (isNaN(numero) || numero <= 1) {
        document.getElementById("mensajeResultadoPrimo").innerText = "Por favor, ingrese un número mayor que 1.";
        return; 
    }
    if (esPrimo(numero)) {
        document.getElementById("mensajeResultadoPrimo").innerText = `${numero} es un número primo.`;
    } else {
        document.getElementById("mensajeResultadoPrimo").innerText = `${numero} no es un número primo.`;
    }
}
function esPrimo(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true; 
}
function generarPrimos() {
    const valorIngresado = document.getElementById("inputNumeroPrimos").value.trim();
    const numero = parseInt(valorIngresado);
    if (isNaN(numero) || numero <= 1) {
        document.getElementById("mensajeResultadoPrimos").innerText = "Por favor, ingrese un número mayor que 1.";
        return;
    }
    const primos = [];
    for (let i = 2; i <= numero; i++) {
        if (esPrimo(i)) {
            primos.push(i);
        }
    }
    document.getElementById("mensajeResultadoPrimos").innerText = `Números primos hasta ${numero}: ${primos.join(", ")}`;
}
function esPrimo(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false; 
    }
    return true;
}
function generarFibonacci() {
    const valorIngresado = document.getElementById("inputNumeroFibonacci").value.trim();
    const numero = parseInt(valorIngresado);
    if (isNaN(numero) || numero <= 0) {
        document.getElementById("mensajeResultadoFibonacci").innerText = "Por favor, ingrese un número mayor que 0.";
        return; 
    }
    const fibonacci = generarSerieFibonacci(numero);
    document.getElementById("mensajeResultadoFibonacci").innerText = `Serie de Fibonacci hasta ${numero}: ${fibonacci.join(", ")}`;
}
function generarSerieFibonacci(n) {
    const serie = [0, 1];
    for (let i = 2; i < n; i++) {
        serie.push(serie[i - 1] + serie[i - 2]);
    }
    return serie;
}
function generarSerieExponencial() {
    const valorX = document.getElementById("inputX").value.trim();
    const valorN = document.getElementById("inputN").value.trim();
    const x = parseFloat(valorX);
    const n = parseInt(valorN);
    if (isNaN(x) || isNaN(n) || n <= 0) {
        document.getElementById("mensajeResultadoExponencial").innerText = "Por favor, ingrese valores válidos para x y n.";
        return;
    }
    const serieExponencial = calcularSerieExponencial(x, n);
    document.getElementById("mensajeResultadoExponencial").innerText = `Serie Exponencial para e^${x} con ${n} términos: ${serieExponencial.join(", ")}`;
}
function calcularSerieExponencial(x, n) {
    const serie = [];
    let termino = 1; 
    for (let i = 0; i < n; i++) {
        if (i > 0) {
            termino *= x / i;
        }
        serie.push(termino);
    }
    return serie;
}
function verificarPalindromo() {
    const palabra = document.getElementById("inputPalindromo").value.trim();
    const palabraLimpia = palabra.toLowerCase().replace(/[^a-zñáéíóúü]/g, "");
    const palabraInvertida = palabraLimpia.split('').reverse().join('');
    if (palabraLimpia === palabraInvertida) {
        document.getElementById("mensajeResultadoPalindromo").innerText = `"${palabra}" es un palíndromo.`;
    } else {
        document.getElementById("mensajeResultadoPalindromo").innerText = `"${palabra}" no es un palíndromo.`;
    }
}
function invertirCadena() {
    const cadena = document.getElementById("inputCadena").value.trim();
    const cadenaInvertida = cadena.split('').reverse().join('');
    document.getElementById("mensajeResultadoCadena").innerText = `Cadena invertida: "${cadenaInvertida}"`;
}
let calcExpression = "";
function calcInput(value) {
    calcExpression += value;
    document.getElementById("calcDisplay").value = calcExpression;
}
function calcClear() {
    calcExpression = "";
    document.getElementById("calcDisplay").value = "";
}
function calcCalculate() {
    try {
        const safeExpression = calcExpression.replace(/\^/g, "**");
        const result = eval(safeExpression);
        document.getElementById("calcDisplay").value = result;
        calcExpression = result.toString(); 
    } catch {
        document.getElementById("calcDisplay").value = "Error";
        calcExpression = "";
    }
}
function calcFactorial() {
    try {
        const match = calcExpression.match(/(\d+)(?=$)/);
        if (!match) throw "Error"; 
        const num = parseInt(match[0]);
        if (num < 0 || !Number.isInteger(num)) {
            document.getElementById("calcDisplay").value = "Error";
            calcExpression = "";
            return;
        }
        let factorial = 1;
        for (let i = 2; i <= num; i++) {
            factorial *= i;
        }
        calcExpression = calcExpression.replace(/\d+$/, factorial);
        document.getElementById("calcDisplay").value = calcExpression;
    } catch {
        document.getElementById("calcDisplay").value = "Error";
        calcExpression = "";
    }
}
function convertirANumerosRomanos(event) {
    event.preventDefault(); 
    const numero = parseInt(document.getElementById("numero").value);
    if (numero < 1 || numero > 3999) {
        document.getElementById("resultadoRomano").innerText = "Por favor, ingrese un número entre 1 y 3999.";
        return;
    }
    const valoresRomanos = [
        { valor: 1000, simbolo: "M" },
        { valor: 900, simbolo: "CM" },
        { valor: 500, simbolo: "D" },
        { valor: 400, simbolo: "CD" },
        { valor: 100, simbolo: "C" },
        { valor: 90, simbolo: "XC" },
        { valor: 50, simbolo: "L" },
        { valor: 40, simbolo: "XL" },
        { valor: 10, simbolo: "X" },
        { valor: 9, simbolo: "IX" },
        { valor: 5, simbolo: "V" },
        { valor: 4, simbolo: "IV" },
        { valor: 1, simbolo: "I" }
    ];
    let resultado = "";
    let restante = numero;
    for (const item of valoresRomanos) {
        while (restante >= item.valor) {
            resultado += item.simbolo;
            restante -= item.valor;
        }
    }
    document.getElementById("resultadoRomano").innerText = `El número ${numero} en números romanos es: ${resultado}`;
}
function generarMatrizPascal() {
    const filas = parseInt(document.getElementById("inputFilas").value);
    if (isNaN(filas) || filas <= 0) {
        document.getElementById("resultadoPascal").innerHTML = "Por favor, ingrese un número válido de filas mayor a 0.";
        return;
    }
    const matrizPascal = [];
    for (let i = 0; i < filas; i++) {
        matrizPascal[i] = []; 
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                matrizPascal[i][j] = 1; 
            } else {
                matrizPascal[i][j] = matrizPascal[i - 1][j - 1] + matrizPascal[i - 1][j]; 
            }
        }
    }
    mostrarMatrizPascal(matrizPascal);
}
function mostrarMatrizPascal(matriz) {
    const contenedorResultado = document.getElementById("resultadoPascal");
    contenedorResultado.innerHTML = ""; 
    matriz.forEach(fila => {
        const filaTexto = fila.join(" ");
        const parrafo = document.createElement("p");
        parrafo.textContent = filaTexto; 
        contenedorResultado.appendChild(parrafo); 
    });
}
