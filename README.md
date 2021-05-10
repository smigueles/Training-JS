# Training-JS

Estos son distintos ejercicios para practicar JavaScript!

Luego de codear tu solución corré el comando `yarn test [numero de ejercicio]` (por ejemplo: `yarn test 1`), para ejecutar los tests y saber si tu solución da un resultado correcto!.

# Enunciados

## Ejercicio 1: Arrays 101

### sumatoria: (array[num]) => num

Calcula la suma de los elementos del array. Por ejemplo si el array es [1, 3, 6, 9] la función devuelve 19.

### reverso: (array[X]) => array[X]

Devuelve el reverso. Por ejemplo si el array es [1, 2, 3] devuelve [3, 2, 1].

### rotaciones: (array[X], num) => array[X]

Definimos rotación como el shift de los numeros de un array a la izquierda. Por ejemplo si nuestro array es: [1, 2, 3, 4, 5] y queremos rotarlo 2 veces el resultado es: [3, 4, 5, 1, 2].

### mesetaMasLarga: (array[X]) => num

Definimos meseta como la secuencia de valores iguales consecutivos. La idea de esta función es devolver la meseta más larga. Por ejemplo si nuestro array es: [1, 2, 2, 3, 3, 3, 3, 3, 4, 5, 5, 5, 3] el resultado esperado es 5.

---

## Ejercicio 2: Funciones, Loops y Arrays

### f1: (array[num]) => array[num]

Donde cada elemento del array devuelto contiene la mitad de cada elemento del array de entrada.

### f2: (array[num], func) => array[num]

Donde cada elemento del array devuelto es el elemnto correspondiente del array de entrada al que se aplico la funcion recibida por parametro.

### f3: (array[num], num) => array[num]

Donde el array devuelto contiene solo a los numeros mayores a el numero recibido por parametro.

### f4: (array[num], func) => array[num]

Donde el array devuelto contiene solo a los numeros que cumplen la funcion recibida por parametro, es decir devuelven verdadero si les aplicamos esta funcion.

### f5: (array[num], num) => num

Donde el numero devuelto es el primero que es menor que el numero recibido por parametro, en caso de no encontrarlo devuelve -1.

### f6: (array[num], func) => num

Donde el numero devuelto es el primero que cumple la funcion devuelta por parametro.

---

## Ejercicio 3: Arrays multidimensionales

### máximo: (array[array[num]]) => num

Devuelve el valor máximo de la matriz.

### multiplicarMatrices: (array[array[num]], array[array[num]]) => array[array[num]]

Devuelve la multiplicación de las matrices. Supongan que siempre reciben matrices con las dimensiones correctas para multiplicarse. (https://www.mathsisfun.com/algebra/matrix-multiplying.html).

### esDegrade: (array[array[num]]) => bool

Devuelve true si la matriz es un degrade.
Definimos degrade de la siguiente manera: Una matriz donde todas las celdas de la diagonal tienen el mismo valor y los números a la derecha son más chicos y a la izquierda más grande.
Por ejemplo: La siguiente matriz es un degrade:
[[4, 6, 8, 19]
[2, 4, 9, 40]
[1, 2, 4, 10]
[-2,0, 2, 4]]
La matriz vacia es considerada un degrade.

### esDamero: (Tablero) => bool

Definimos Tablero como la matriz de 1 y 0 (array[array[num]]). El tablero vacio no es damero.
Esta función evuelve true si el tablero de entrada es un tablero alternado de celdas negras y blancas.

### esDameroRegular (Tablero) => bool

Devuelve true si el tablero de entrada es un tablero damero y es una matriz cuadrada (El alto de la matriz es igual al largo).

---

## Ejercicio 4: Arrays y html

Todos los htmls de este codigo los pueden devolver como strings pelados.
Un usuario quiere poder ver sus facturas, una factura se representa por un codigo que puede tener letras y numeros (un string) y por un valor que representa cuanto se debe pagar en el perido de la factura.

## ¿Como representarias una factura?

### ¿Como visualizarias una factura con html?

Es razonable esperar que el usuario tenga mas de una factura para visualizar, pero este es un número que no sabemos.

### ¿Como harias para visualizar todas las facturas?

Luego de implementar esta vista los chicos de funcional se dieron cuenta que faltaban algunos datos y nos pidieron que implementemos un par de funciones adicionales.
Lo primero que quieren que agregemos es una calculadora de interes,
para esto debemos mostrar ademas del valor y el codigo de cada factura cuanto sera su valor en caso de no ser pagada antes del vencimiento. El cliente definio que el interes agregado sera de 3,5%.

Ademas quieren que agregemos una funcionalidad que le indique al usuario cuantas facturas puede pagar dada una cantidad determinada de dinero.
Por ejemplo si tenemos dos facturas que adeudan $600 y una $100 y solo contamos con \$700 las unicas facturas que podremos pagar son la segunda y una de las dos primeras (Es indiferente cual).

Las chicas de diseño todavia no definieron como se vera esta ultima funcionalidad asi que por ahora solo debemos agregar la logica.

---

## Ejercicio 5: Strings

### capitalizar: (string) => string

Capitaliza todas las palabras del string. Por ejemplo si el string es 'hola mundo widergy' el resultado deberia ser 'Hola Mundo Widergy'.

### inverso: (string) => string

Devuelve el inverso de la frase (Las palabras estan separadas por un ' '). Por ejemplo para 'Hola Mundo Widergy' su inverso seria: 'Widergy Mundo Hola'.

### sanitizar: (string, string) => string

Sanitiza en el primer string todas las apariciones del segundo. Por ejemplo si recibimos 'Este es un ejercicio de prueba' y 'prueba' el resultado seria: 'Ese es un ejercicio de ######' (Pueden suponer que el segundo string nunca es vacio).

### contarArrays: (array[string], array[string]) => array[num]

Cuenta la aparicion de los strings del segundo array en el primero.
Por ejemplo si recibimos ['aba', 'baba', 'aba', 'xzxb'] y ['aba', 'ab', 'xzxb'] entonces debemos devolver [2, 0, 1] ya que 'aba' aparece dos veces, 'ab' ninguna y 'xzxb' una. (Pueden suponer que el segundo array nunca esta vacio).

### esSubsecuencia: (string, string) => bool

Devuelve true si el segundo string es subsecuencia del primero (Pueden suponer que el segundo string no es vacio)

---

## Ejercicio 6: Objetos 101

### listar: (Object) => string

Lista un objeto como un string. Por ejemplo para {a: 1, b: 2} el resultado de listar seria 'a: 1, b: 2'

### invertir: (Object) => Object

Devuelve un objeto cuyas keys sean los valores y viceversa.

### ordenarPorId (array[Object]) => array[Object]

Dado un array de objetos que tengan un atributo numerico "id" ordenar el array según el mismo (Pueden asumir que no se repiten los ids si les es más facil).

### Una utility quiere agregar un nuevo menu a su oficina virtual. Este menu contara con una cantidad determinada de subOpciones (Que tienen la misma estructura que una Opcion), un titulo y una funcion que ejecuta cuando es seleccionado.

Desarrollar una función que imprima (en la consola) el menu de forma que se pueda visualizar todo el arbol de opciones (Pudiendo discernir que opcion es hijo de cual y a que nivel pertenece)

### Usando el menu definido en el punto anterior: Se agrego a cada opcion un flag que indique si el usuario puede visualizar esa opcion. Desarrollar una función que devuelva la primera opción visible (Esta seria la primer hoja donde todos sus padres son visibles, en un arbol donde todos los nodos son visibles seria la hoja más a la izquierda).
