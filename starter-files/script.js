// API
const API_ENDPOINT = 'https://yesno.wtf/api'; //mi api devuelve las respuestas Yes y No, su respuesta e sun objeto JSON con una propiedad "answer"

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

// primero tenemos que organizar la funcion de la api con el fech, que siempre va a estar acompañado de un async para que sea asincronico 
async function fetchAnswer() { //declaro mi función asincrónica 
    try { //ejecuta mi código de bloque, pero si existe un error se manejará en el bloque catch (27)
        const response = await fetch(API_ENDPOINT); // mi fetch (API_ENDPOINT) realiza una solicitud HTTP al URL que ha sido almacenado (2) previamente. 
        //fetch devuelve una promesa que se resuelve con la respuesta del servidor
        // await pone en pausa toda la ejecución hasta que  se completa la solicitud de la API
        const data = await response.json(); // con mi response.json() me estoy asegurando de transformar los datos a formato json para que mi JS pueda procesar la información proveniente de la API
        //mi const data = almacena los datos json transformados de la api para su lectura, es decir, que el valor que se guarda es un objeto JS convertido a partur de los datos JSON obtenidos de la api 
        const answerDiv = document.getElementById('answer'); //mando llamar mi elemnto HTML con mi ID aswer 
        // mi const answerDiv está almacenando la referencia de ese elemento 
        answerDiv.innerHTML = data.answer; // answerDiv es mi constante que guarda la referencia a mi HTML de mi ID "answer"
        // mi propiedad innerHTML me asegura de poder reemplazar en mi ID "aswer" por data.answer (data 20), que es el dato que obtengo de la API (yes y no)
        //data.answer es la forma en la que puedo acceder al valor de la propiedad answer dentro del objeto data, es decir, lo que quiero mostrar en HTML que es la respuesta de la APi en formato json ("propiedad": "valor",)

        setTimeout(() => { // () => { } mi función de flecha que se ejecutará después de esos 3 segundos.
            answerDiv.innerHTML = ''; // se limpia el contenido de mi div en mi id answer, es decir la respuesta de la API 
            document.getElementById('input').value = ''; // sirve para poder borrar el texto que el usuario escribitó en el input 
            // mi propiedad .value me permite acceder al input para poder limpiarlo =""; es decir que mi propiedad .value me permite interactuar con el valor dentro de ese campo de texto
        }, 3000); // todo esto se ejecuta a los 3 segundos
    } catch (error) { //captura los errores que ocurran en el bloque trye y se cuarda en mi variable "error"
        console.error('Error al obtener la respuesta de la API:', error);
    }
}

// Validar que el botón esté habilitado solo si el input tiene texto
function validateInput() { //creo mi función para poder validar si el input esta vacío 
    const input = document.getElementById('input'); //con mi getElemento estoy buscando mi elemento con el id "input" en mi HTML, mientras guardo esta infromación en mi constante "input"
    const button = document.getElementById('button'); //con mi getElemento estoy buscando mi elemento con el id "button" en mi HTML, mientras guardo esta infromación en mi constante "button"
    if (input.value.trim() === '') { // mi operador de igualdad extricta === compueba si el texto esta vacío después de realizar mi método trim
        // mi método .trim() elimina los espacios en blanco al inicio y al final de mi cadena de texto.
        button.disabled = true;
    } else { //se desactiva el botón si el input se encuentra vacío
        button.disabled = false;
    } //se activa el botón si hay texto en el input 
}

document.getElementById('button').addEventListener('click', fetchAnswer); //document. hace referencia a mi DOM
//getElementById busca mi ID "botón" en el HTML.
//mi addEventListener va a asociar el evento de dar click al botón con mi función fetchAnswer (16), es decir que al hacer click se llamará y ejecutará la función y por lo tanto se ejecuta
// addEventListener va a estar compuesto de 3 componentes, elemento, evento, función y opciones (opcional)


document.getElementById('input').addEventListener('input', validateInput); //se busca mi elemento con el ID input en el HTML y se asocia el evento de escribir en el input  con la funcuión validateInput (36) para poder validar el texto en tiempo real, en este sentido mi evento "input" se dispara cada vez que el contenido en el campo de texto cambia por lo que se valida el estado del input en tiempo real
 
validateInput(); //con esto nos aseguramos de que el botón se encuentre deshabilitado al cargar la página. 

/*

    1. fetch (API Web) - Realiza solicitudes HTTP (GET, POST, etc.)
       Enlace: https://developer.mozilla.org/en-US/docs/Web/API/fetch

    2. getElementById (DOM) - Permite acceder a un elemento del DOM por su ID
       Enlace: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

    3. addEventListener (DOM) - Añade un listener para eventos en el DOM (como click, input, etc.)
       Enlace: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

    4. innerHTML (DOM) - Modifica o lee el contenido HTML dentro de un elemento del DOM
       Enlace: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML

    5. String.prototype.trim - Elimina los espacios en blanco al inicio y al final de una cadena de texto
       Enlace: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

    6. setTimeout (Web API) - Ejecuta una función después de un tiempo específico (en milisegundos)
       Enlace: https://developer.mozilla.org/en-US/docs/Web/API/setTimeout

    7. Promesas en JavaScript - Guía sobre cómo funcionan las promesas para manejar operaciones asincrónicas
       Enlace: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/
