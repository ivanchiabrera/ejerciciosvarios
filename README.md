# Requerimientos para los ejercicios
  - NPM
  - NodeJs
  
En este caso he utilizado NPM v6.14.18 y NodeJs v14.15.0

### EJERCICIO 1

Subir la escalera
Estás subiendo una escalera que tiene n escalones. En cada paso podés elegir subir 1 escalón o subir 2.
Programar una solución que, dada una escalera de n escalones, encuentre de cuántas formas distintas se puede subir para llegar al final.
Ejemplo:
Para una escalera de 2 escalones, el resultado es 2 porque las posibilidades son:
1.	Subir 1 escalón + subir 1 escalón
2.	Subir 2 escalones
Para una escalera de 3 escalones, el resultado es 3, porque las posiblidades son:
1.	Subir 1 escalón + subir 1 escalón + subir 1 escalón
2.	Subir 1 escalón + subir 2 escalones
3.	Subir 2 escalones + subir 1 escalón

### Instrucciones
  Dentro de la carpeta ejercico 1
  - Ejecutar **npm install** para instalar dependencias
  - En caso de no tener JestJs para los test ejecutar **npm install --save-dev jest**
  - Para la ejecución del programa ejecutar **node app.js**
  - Para la ejecución de los test unitarios ejecutar **npm test**
### EJERCICIO 2

Reaprovisionamiento de productos
Deberás escribir un programa que lea el archivo  Json  donde se encuentran las compras de un cliente y calcule la fecha de posible recompra de los productos que compró (solo los que compró al menos 2 veces).
Para obtener la fecha de recompra de un producto: hay que analizar cada cuanto tiempo vuelve a comprar ese producto. Luego sumarle ese tiempo a la fecha de última compra del producto. Entonces vas a calcular una fecha de recompra por producto.

### Instrucciones para el ejercicio 2
  Dentro de la carpeta ejercico 2
  - Ejecutar **npm install** para instalar dependencias
  - En caso de no tener JestJs para los test ejecutar **npm install --save-dev jest**
  - Para la ejecución del programa ejecutar **node app.js**
  - Para la ejecución de los test unitarios ejecutar **npm test**
