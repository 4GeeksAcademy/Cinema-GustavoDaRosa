function inicializarSala(): number[][] {
    let sala: number[][] = [];

    for(var fila=0; fila<8; fila++){

        let nuevaFila: number[] = [];

        for (var columna=0; columna<10; columna++){

            nuevaFila.push(0);
        }

        sala.push(nuevaFila);
   }

   return sala;
}

function mostrarSala(sala: number[][]) {
    console.log("    0 1 2 3 4 5 6 7 8 9");
    console.log("-----------------------");

    for (var fila = 0; fila < 8; fila++) {
        var textoFila = fila + ":  "; 

        for (var columna = 0; columna < 10; columna++) {
            // Si el asiento es 1 está ocupado (X), si es 0 está libre (L)
            if (sala[fila][columna] === 1) {
                textoFila = textoFila + "X ";
            } else {
                textoFila = textoFila + "L ";
            }
        }
        
        console.log(textoFila); 
    }
}

function reservarAsiento(sala: number[][], fila: number, columna: number) {
    
    if (fila < 0 || fila > 7 || columna < 0 || columna > 9) {
        return "Esa posición no existe en la sala.";
    }

    if (sala[fila][columna] === 1) {
        return "El asiento ya está ocupado.";
    } else {
        sala[fila][columna] = 1;
        return "Asiento reservado correctamente.";
    }
}


function contarAsientos(sala: number[][]): string {
    var ocupados = 0;
    var libres = 0;

    for (var fila = 0; fila < 8; fila++) {
        for (var columna = 0; columna < 10; columna++) {
            if (sala[fila][columna] === 1) {
                ocupados = ocupados + 1;
            } else {
                libres = libres + 1;
            }
        }
    }

    return "Asientos ocupados: " + ocupados + " | Asientos disponibles: " + libres;
}


function buscarContiguos(sala: number[][]) {
    for (var fila = 0; fila < 8; fila++) {
        for (var columna = 0; columna < 9; columna++) {
            // Si el asiento actual es 0 Y el de la derecha también es 0
            if (sala[fila][columna] === 0 && sala[fila][columna + 1] === 0) {
                return "Hallado en la Fila " + fila + ": Asientos " + columna + " y " + (columna + 1);
            }
        }
    
    return "No hay dos asientos contiguos disponibles.";
}
}



// PROGRAMA PRINCIPAL (MAIN) - PRUEBAS DE ESCENARIOS

console.log("==================================================");
console.log("🎬 SISTEMA DE GESTIÓN DE CINE - INICIO DE PRUEBAS 🎬");
console.log("==================================================\n");


console.log("--- ESCENARIO A: SALA NUEVA Y VACÍA ---");
var salaCine = inicializarSala(); 
mostrarSala(salaCine);           

// Mostramos el conteo inicial y buscamos los primeros asientos juntos
console.log(contarAsientos(salaCine));
console.log(buscarContiguos(salaCine)); 
console.log("\n--------------------------------------------------\n");


console.log("--- ESCENARIO B: REALIZANDO RESERVAS (SALA PARCIAL) ---");

// Intentamos hacer algunas reservas exitosas
console.log(reservarAsiento(salaCine, 0, 4)); 
console.log(reservarAsiento(salaCine, 0, 5)); 
console.log(reservarAsiento(salaCine, 3, 2)); 
console.log(reservarAsiento(salaCine, 7, 9)); // El último asiento

// PROBAMOS VALIDACIONES (Errores)
console.log("\n[Probando errores de validación]:");
console.log(reservarAsiento(salaCine, 0, 4));  // Ya está ocupado
console.log(reservarAsiento(salaCine, 15, 2)); // Fila no existe

// Mostramos como quedo la sala ahora
console.log("\n[Estado de la sala tras las reservas]:");
mostrarSala(salaCine);
console.log(contarAsientos(salaCine));
console.log(buscarContiguos(salaCine)); // Debería encontrar otros asientos juntos
console.log("\n--------------------------------------------------\n");


console.log("--- ESCENARIO C: SALA CASI LLENA (ASIENTOS SUELTOS) ---");


var salaCasiLlena = inicializarSala();

for (var f = 0; f < 8; f++) {
    for (var c = 0; c < 10; c++) {
        // Si la columna es par, reservamos el asiento. Si es impar, queda libre (0)
        if (c % 2 === 0) {
            reservarAsiento(salaCasiLlena, f, c);
        }
    }
}

mostrarSala(salaCasiLlena);
console.log(contarAsientos(salaCasiLlena));
console.log(buscarContiguos(salaCasiLlena)); 
console.log("\n--------------------------------------------------\n");



console.log("--- ESCENARIO D: SALA COMPLETAMENTE LLENA ---");

var salaLlena = inicializarSala();

for (var f = 0; f < 8; f++) {
    for (var c = 0; c < 10; c++) {
        reservarAsiento(salaLlena, f, c);
    }
}

mostrarSala(salaLlena);
console.log(contarAsientos(salaLlena));

// Intentamos buscar contiguos en una sala llena
console.log(buscarContiguos(salaLlena));

// Intentamos reservar en una sala llena
console.log(reservarAsiento(salaLlena, 5, 5));
