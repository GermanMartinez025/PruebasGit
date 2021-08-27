<div id="contenedor">
        <form id="formulario" method="POST" action>
                <div class="input-s">
                        <label for="nombre">Nombre</label>
                        <input name="nombre" type="text">
                </div>
                <div class="input-s">
                        <label for="especie">Especie</label>
                        <input name="especie" type="text">
                </div>
                <div id="imagen">
                        <div>
                                <input type="file" id="inputFoto" style="display: none;">
                                <img name="imagen">
                                <i id="cambiar" class="far fa-edit" aria-hidden="true"></i>
                        </div>
                </div>
                <div class="input-s">
                        <label for="estado">Estado</label>
                        <select name="estado">
                        </select>
                </div>
                <div class="input-s">
                        <label for="genero">Género</label>
                        <select name="genero">
                                <option>Femele</option>
                                <option>Male</option>
                                <option>Genderless</option>
                                <option>unknown</option>
                        </select>
                </div>
                <div class="input-s">
                        <label for="origen">Origén</label>
                        <input name="origen" type="text">
                </div>
                <div class="input-s">
                        <label for="ubicaccion">Ubicacción</label>
                        <input name="ubicaccion" type="text">
                </div>
                <button class="btn btn-principal">Actualizar</button>
        </form>
        
</div>
<script src="views/js/editar.js"></script>
<?php 
        $añadir= new character_controller();
        $añadir->addPersonaje();
?>