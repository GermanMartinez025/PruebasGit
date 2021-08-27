const contenedor=document.getElementById("contenedor");
const contenedorCards=document.getElementById("contenedor-cards");
const contenedorDetalles=document.createElement("div");
contenedorDetalles.id="contenedor-detalles";


//CRUZ
const cross=document.createElement("i") 
cross.className="fas fa-times";
cross.id="cross";

var pagina=1;
const getCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character/?page="+pagina);
    const data = await response.json();
    console.log(data);
    listarCharacters(data.results);
    
}

getCharacters();
const btnSiguiente=document.getElementById("siguiente");
btnSiguiente.addEventListener('click', () => {
    if(pagina != 34){
        document.getElementById('contenedor-cards').innerHTML = ''
        pagina++;
        getCharacters();
    } else{
        console.log("esta es la ultima pagina");
    }
}
)
const btnAnterior=document.getElementById("anterior");
btnAnterior.addEventListener('click', () => {
    if(pagina != 1){
        document.getElementById('contenedor-cards').innerHTML = ''
        pagina--;
        getCharacters();
    }else{
        console.log("esta es la primer pagina");
    }
}
)

function listarCharacters(data){
    data.forEach(characters => {
        //Crear card, agregar class card y Añadir card
        const card=document.createElement('div');
        card.className="card";
        contenedorCards.appendChild(card);
        //Agregar la imagen en la card
        const image=document.createElement("img");
        image.className="img-card";
        image.src=characters.image;
        card.appendChild(image);
        //Agregar info (no spoiler)
        const info=document.createElement("div");
        info.className="info";
        card.appendChild(info);

        //Nombre
        const name=document.createElement("span");
        info.appendChild(name);

        //Especie
        const species=document.createElement("span");
        species.textContent=characters.species;
        info.appendChild(species);

        //Genero
        const gender=document.createElement("span");
        gender.textContent="Género: " + characters.gender;
        info.appendChild(gender);

        //Origen
        const origin=document.createElement("span");
        origin.textContent="Origen: " + characters.origin.name;
        info.appendChild(origin);

        //Ubicación actual
        const location=document.createElement("span");
        location.textContent="Ubiacción actual: " + characters.location.name;
        info.appendChild(location);

        //Boton Ver + info
        const btnViewDetails=document.createElement("button");
        btnViewDetails.className="btn btn-principal";
        btnViewDetails.name="detalles";
        btnViewDetails.textContent="Ver Detalles";
        card.appendChild(btnViewDetails);
        name.textContent="Nombre: " + characters.name;
        btnViewDetails.addEventListener('click', (action) => mostrarDetalles(characters));

        //Boton editar
        const btnEditar=document.createElement("button");
        btnEditar.className="btn btn-secundario";
        btnEditar.name="editar";
        btnEditar.textContent="Editar"
        card.appendChild(btnEditar);
        btnEditar.addEventListener('click', (action)=> editarCharacter(characters))
        const contenedorFav=document.createElement("div");
        const fav=document.createElement("i");
        fav.className="far fa-heart";
        contenedorFav.appendChild(fav);
        card.appendChild(contenedorFav);
    });
}

function mostrarDetalles(character){
    contenedor.appendChild(contenedorDetalles);
    contenedorDetalles.innerHTML='';
    contenedorDetalles.className="expandirDetalles";
    const detalles=document.createElement("div");
    detalles.className="detalles";
    const img=document.createElement("img");
    const name=document.createElement("span");
    const status=document.createElement("span");
    const species=document.createElement("span");
    const gender=document.createElement("span");
    const origin=document.createElement("span");
    const location=document.createElement("span");
    img.src=character.image;
    name.textContent="Nombre: " + character.name;
    status.textContent="Estado: " + character.status;
    species.textContent="Especie: " + character.species;
    gender.textContent="Género: " + character.gender;
    origin.textContent="Origén: " + character.origin.name;
    location.textContent="Ubicacción: " + character.location.name;
    contenedorDetalles.appendChild(img);
    contenedorDetalles.appendChild(detalles);
    detalles.appendChild(name);
    detalles.appendChild(status);
    detalles.appendChild(species);
    detalles.appendChild(gender);
    detalles.appendChild(origin);
    detalles.appendChild(location);
    contenedorDetalles.appendChild(cross);
    const contenedorEpisode=document.createElement("div");
    contenedorEpisode.className="contenedorEpisode";
    contenedorDetalles.appendChild(contenedorEpisode);
    getEpisode(contenedorEpisode, character.episode);
    //episode.textContent=character.episode;

}
function editarCharacter(character){
    window.location="./index.php?character="+character.id+"&routes=modPersonaje";
    
}
cross.addEventListener('click', () =>{
    contenedorDetalles.className="contraerDetalles";
    setTimeout(function (){contenedor.removeChild(contenedorDetalles)}, 1500);
    
});

const getEpisode = (contenedorEpisode, episode) => {
    episode.forEach( (ep) => {
        fetch(ep)
        .then ((respuesta) =>{
            return respuesta.json();
        })
        .then((respuesta) => {
            const epispodeSpan=document.createElement("span");
            epispodeSpan.textContent=respuesta.episode +"---"+ respuesta.name;
            contenedorEpisode.appendChild(epispodeSpan);
        })
    })
}

