// Se selecciona el div 
const palleteContainer = document.getElementById("palleteContainer")

// Se crea un array con los valores posibles para los colores en hexadecimal
const colorValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C" ,"D", "E" ,"F"]

// Se define la cantidad de colores que se quieren generar
const palleteSize = 5


// Función que itera el div padre con la cantidad de colores que se quieren mostrar, crea divs hijos con la clase palleteItem. Al finalizar se llama a la función updatePallete
const createPallete = () => {
    for (let i = 0; i < palleteSize; i++){
        const palleteElement = document.createElement('div')
        palleteElement.classList.add('palleteItem')
        palleteContainer.appendChild(palleteElement)
    }
    updatePallete()
}


// Función que itera los divs hijos de palleteContainer, y llama a la función cololrize dandole como parametro cada hijo
const updatePallete = () => {
    for (let i = 0; i < palleteContainer.children.length; i++){
        colorize(palleteContainer.children[i])
    }
}


// Función que recibe a cada hijo de palleteContainer, declara una variable color y selecciona aleatoriamente valores del array colorValues y los concatena a la variable color. Luego asigna a cada hijo la propiedad backgroundColor con ese color, y crea un span con el código usado.
const colorize = (element) => {
    let color = "#"
    for (let i = 0; i < 6; i++){
        const randomElement = colorValues[Math.floor(Math.random() * colorValues.length)]
        color += randomElement
    }
    element.style.backgroundColor = color
    element.innerHTML = `<span class="colorHex">${color}</span>`
}


// Se llama a la función que crea a los divs hijos al iniciar la carga del documento
createPallete ()


// Funcionalidades extra: se puede bloquear un color elegido al hacer click sobre el mismo. Al hacerlo, al llamar a la función updatePallete se mantiene ese color elegido.
// Ideas, cada posición tiene un estado de true o false, y la función updatePallete chequea si ese valor es true o false antes de llamar a la función colorize. Para agregar ese estado, se cambia la constante palleteSize de tipo number a tipo objeto.