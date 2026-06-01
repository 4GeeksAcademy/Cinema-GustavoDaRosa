# Cinema-GustavoDaRosa

Cinema en TypeScript

Construye un programa en TypeScript que gestione las reservas de asientos de un cine usando arreglos y funciones.

Funcionalidad principal
1) Crea una función que inicialice una matriz de asientos (un arreglo bidimensional) que represente 8 filas y 10 columnas.

2) Representa los asientos ocupados con 1 y los disponibles con 0.

3) Crea una función que muestre el estado actual de la sala imprimiendo la matriz en la consola, usando:

X para los asientos ocupados

L para los asientos libres

Incluye números de fila y columna para que sea fácil identificar cada posición

4) Implementa una función para reservar un asiento dado un número de fila y un número de columna (márcalo como ocupado cambiando su valor de 0 a 1).

5) Añade validación: la función debe comprobar si el asiento ya está ocupado antes de reservarlo y devolver un mensaje indicando si la operación tuvo éxito o falló.

6) Crea una función que cuente y devuelva cuántos asientos están ocupados y cuántos están disponibles en toda la sala.

Funcionalidad avanzada
1) Implementa una función que busque dos asientos libres contiguos (horizontalmente, en la misma fila) y devuelva sus posiciones.

2) Si se encuentran varios pares de asientos contiguos, devuelve el primero.

3) Si no hay asientos contiguos disponibles, la función debe indicarlo claramente.

Pruebas y salida por consola

Prueba tu programa con distintos escenarios:

A) Sala vacía (todos los asientos disponibles)

B) Sala parcialmente ocupada

C) Sala casi llena con solo asientos sueltos disponibles

D) Sala completamente llena (sin asientos disponibles)

Asegúrate de que tu código muestre mensajes claros para cada operación (reserva confirmada, asiento ya ocupado, asientos contiguos encontrados, etc.).

Agrega comentarios que expliquen qué hace cada función.