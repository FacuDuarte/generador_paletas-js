// Se selecciona el div 
const palleteContainer = document.getElementById("palleteContainer")

// Se crea un array con los valores posibles para los colores en hexadecimal
const colorValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C" ,"D", "E" ,"F"]

// Se define la cantidad de colores que se quieren generar
const palleteSize = [
    {number:0, valor:true},
    {number:1, valor:true},
    {number:2, valor:true},
    {number:3, valor:true},
    {number:4, valor:true},
]

// Función que itera el div padre con la cantidad de colores que se quieren mostrar, crea divs hijos con la clase palleteItem. Al finalizar se llama a la función updatePallete
const createPallete = () => {
    for (let i = 0; i < palleteSize.length; i++){

        const palleteElement = document.createElement('div')
        palleteElement.classList.add('palleteItem')
        palleteContainer.appendChild(palleteElement)
    }
    updatePallete()
}


// Función que itera los divs hijos de palleteContainer, y llama a la función cololrize dandole como parametro cada hijo
const updatePallete = () => {
    for (let i = 0; i < palleteContainer.children.length; i++){

        // El if chequea si el objeto en palleteSize con la posición de i tiene el valor true, en caso positivo, llama a la función colorize, en caso de que sea false no hace nada
        if (palleteSize[i].valor == true)

        // La función colorize envia a cada hijo del palleteContainer y el valor de i en cada vuelta del for, comenzando por 0.
        colorize(palleteContainer.children[i],i)
    }
}


// Función que recibe a cada hijo de palleteContainer, declara una variable color y selecciona aleatoriamente valores del array colorValues y los concatena a la variable color. Luego asigna a cada hijo la propiedad backgroundColor con ese color, crea un span con el código usado, y un button con la llamada a la función lockColor, pasandole como argunmento el parámetro index que recibe.
const colorize = (element, index) => {
    let color = "#"
    for (let i = 0; i < 6; i++){
        const randomElement = colorValues[Math.floor(Math.random() * colorValues.length)]
        color += randomElement
    }
    element.style.backgroundColor = color
    element.innerHTML = 
    `<button className="buttonLockColor" onClick="lockColor(${index})">Bloquear color</button>
    <span class="colorHex">${color}</span>`
}



// Se llama a la función que crea a los divs hijos al iniciar la carga del documento
createPallete ()


// Funcionalidades extra: se puede bloquear un color elegido al hacer click sobre el mismo. Al hacerlo, al llamar a la función updatePallete se mantiene ese color elegido.


// Función que recibe como parámetro la posición de i al momento de comenzar el bucle for, empezando por 0. Evalúa primero si la propiedad del objeto valor con la posición recibida es igual a true, en caso de ser cierto cambia la propiedad a false, y en caso de ser false la cambia a true.

const lockColor = (index) => {
    palleteSize[index].valor ? palleteSize[index].valor= false : palleteSize[index].valor= true
}