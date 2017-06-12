var cargarPagina = function () {
    cargarPersonajes();
};

var cargarPersonajes = function () {
    $.ajax('http://swapi.co/api/people/',{
        method: 'GET',
        dataType: 'json',
        success: function (response) {
            var personajes = response.results;
            $("#total").text(response.count);
            mostrarPersonajes(personajes);
        },
        error: function (error) {
            console.log("error ", error);
        }
    });
};

var mostrarPersonajes = function(personajes){
    var $ul = $("#personajes")
            personajes.forEach( function(personaje){
                var $li = $("<li />");
                $li.text(personaje.name+ "-" + personaje.height + "cm");
                $ul.append($li);
            })
}


$(document).ready(cargarPagina);
