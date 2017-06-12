var cargarPagina = function () {
    cargarPersonajes();
};

var cargarPersonajes = function () {
    $.ajax({
        url: 'http://swapi.co/api/people/',
        method: 'GET',
        dataType: 'json',
        success: function (response) {
            console.log("respuesta ", response);
        },
        error: function (error) {
            console.log("error ", error);
        }
    });
};

$(document).ready(cargarPagina);
