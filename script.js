/* hago una declaración con función llamada calcularStickers,
para mi es mas sencillo todo dentro de un bloque de codigo con la función */

function calcularStickers() { // ocupo la funcion parseInt que comprueba el primer argumento
    const sticker1 = parseInt(document.getElementById('sticker1').value) || 0;
    const sticker2 = parseInt(document.getElementById('sticker2').value) || 0;
    const sticker3 = parseInt(document.getElementById('sticker3').value) || 0;
    /* creo variables const que contengan los document.getElementById('sticker1,2,3').value obtengo los valores de los elementos con el id 'sticker',
    parseInt() convierte este valor de una cadena de texto a un número entero,
    y el operador ||(OR) 0; con esto aseguro que el valor no puede ser convertido a un número (por ejemplo, si está vacío), se asigna a 0 por defecto. */

    const total = sticker1 + sticker2 + sticker3;
    // en esta línea se suman los valores convertidos de los tres inputs y almacena el resultado en la variable total.

    const resultado = document.getElementById('resultado');
    // selecciono el elemento del DOM con el id 'resultado' para ser mostrado al final.

    if (total <= 10) {
        resultado.textContent = `Llevas ${total} stickers.`; /* uso comillas inversas para evitar errores y que se ejecute el bloque de codigo,
        dentro ocupo la función $(total) que seria la abreviatura del método getElementByID y me permite una codificación de JavaScript más corta y eficiente. */
    } else {
        resultado.textContent = 'Llevas demasiados stickers.';
    }
    /* compruebo con las condiconales de "if" y "else" si el total de stickers es menor o igual a 10
    y actualiza el texto del elemento de resultado y uso la propiedad textContent, si el total es mayor a 10, 
    muestra un mensaje indicando que se llevan demasiados stickers. Así utilizo un flujo de condicionales con operadores lógicos */

    /* En este desafío aplico conocimientos de condicionales y métodos del DOM en clases
    y juntando lo aprendido de forma autodidacta en tutoriales. */
}
