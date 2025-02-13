{
    // Primera parte
    // Utilizamos titulo como un apuntador al título
    var titulo = document.getElementById("titulo");
    titulo.textContent = "¡Manipulación del DOM!";
    
    // Aquí prácticamente hice lo mismo solo que con el nombre de la clase,
    // además, al tener la clase parrafo varias "instancias", lo tratamos
    // como un arreglo
    var parrafos = document.getElementsByClassName("parrafo");
    for (var i = 0; i < parrafos.length; i++) {
        parrafos[i].style.color = "blue";
    }
    
    // Aquí apuntamos ahora a un elemento dentro de una lista UL
    var lista = document.getElementById("lista");
    lista.firstElementChild.textContent = "Elemento modificado.";
    
    // Segunda parte
    // Creé un elemento LI y lo añadí con append
    var nuevoLi = document.createElement("li");
    nuevoLi.textContent = "Elemento 3";
    lista.appendChild(nuevoLi);
    
    // Aquí hay que recordar que, al tener varios párrafos, hay que
    // tratar este como arreglo
    var nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Este es un párrafo nuevo";
    parrafos[1].appendChild(nuevoParrafo);

    // Aquí, después de apuntar al primer elemento, pedí que me apuntara
    // hacia el segundo elemento, y para esto utilizamos nextElementSibling
    lista.removeChild(lista.firstElementChild.nextElementSibling);

    // Tercera parte
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    var botonParaColor = document.getElementById("boton");
    // Toma de referencia el body y le cambia el color
    botonParaColor.onclick = function cambiarColorBG() {
        var BG = document.body;
        BG.style.backgroundColor = getRandomColor();
    }
    
    // Cuarta parte
    // Cambia el tamaño de la fuente
    titulo.style.fontSize = "48px";
    // Le da un grosor y color al borde
    parrafos[0].style.border = "2px solid red";
    // Alinea un listado en una misma linea
    // se añadió el lista.style.gap para que no se solaparan
    lista.style.display = "flex";
    lista.style.gap = "20px";
}