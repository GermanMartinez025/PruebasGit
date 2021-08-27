const formulario=document.getElementById("formulario");
function rellenarInputs (character){

    //Nombre
    const inputNombre=document.getElementsByName("nombre");
    inputNombre[0].value=character.name;

    //Especie
    const inputEspecie=document.getElementsByName("especie");
    inputEspecie[0].value=character.species;

    //Imagen
    const imag=document.getElementsByName("imagen");
    imag[0].src=character.image;
    //Estado
    const inputEstado=document.getElementsByName("estado");
    const estados=["Alive", "Dead", "unknown"];
    estados.forEach(estado =>{
        const status=document.createElement("option");
        status.textContent=estado;
        if(status.textContent == character.status){
            status.setAttribute("selected", "");
        }
        inputEstado[0].appendChild(status);
    });
    //Genero
    const inputGenero=document.getElementsByName("genero");
    const generos=["Female", "Male", "Genderless", "unknown"];
    generos.forEach(genero =>{
        const gender=document.createElement("option");
        gender.textContent=genero;
        if(gender.textContent == character.gender){
            gender.setAttribute("selected", "");
        }
        inputGenero[0].appendChild(gender);

    })
    //Origen
    const inputOrigen=document.getElementsByName("origen");
    inputOrigen[0].value=character.origin.name;
    //Ubicaccion
    const inputUbicaccion=document.getElementsByName("ubicaccion");
    inputUbicaccion[0].value=character.location.name;
}
function obtenerParametros(){
    const parametros=window.location.search;
    const URLParams=new URLSearchParams(parametros);
    var id=URLParams.get('character');
    console.log(id);
    getCharacter(id);
}
const getCharacter = async (id) => {
    const response = await fetch("https://rickandmortyapi.com/api/character/"+id);
    const character = await response.json();
    console.log(character);
    rellenarInputs(character);
}

obtenerParametros();

const iconCambiar=document.getElementById("cambiar");
iconCambiar.addEventListener('click', () =>{
    document.getElementById("inputFoto").click();
});
iconCambiar.addEventListener("mouseover", () => {
    const cambiar=document.getElementById("cambiar");
    cambiar.style="opacity:1";
});
iconCambiar.addEventListener("mouseout", () => {
    const cambiar=document.getElementById("cambiar");
    cambiar.style="opacity:0";
});