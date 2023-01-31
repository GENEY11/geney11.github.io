let formulario = document.getElementById("formulario");
let contenidoFormulario = formulario.innerHTML;

document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();

    formulario.innerHTML = "El comentario se ha enviado con exito<br> Desea enviar otra consulta?" + "<button class='btn btn-secondary' id='si'>SI</button>" + "<button class='btn btn-secondary' id='no'>NO</button>";
    document.getElementById("si").addEventListener('click', function () {
        formulario.innerHTML = contenidoFormulario;
        document.getElementById('formulario').addEventListener('submit', function (event) {
            event.preventDefault();
            enviarOtro;
        })
    });

    document.getElementById("no").addEventListener('click', function () {
        formulario.innerHTML = "Muchas gracias!";
    })


})


function enviarOtro() {

    formulario.innerHTML = "El comentario se ha enviado con exito<br> Desea enviar otra consulta?" + "<button class='btn btn-primary' id='si'>SI</button>" + "<button class='btn btn-primary' id='no'>NO</button>";
    document.getElementById("si").addEventListener('click', function () {
        formulario.innerHTML = contenidoFormulario;
        document.getElementById('formulario').addEventListener('submit', function (event) {
            event.preventDefault();
            enviarOtro;
        })
    })
    document.getElementById("no").onclick = function () {
        formulario.innerHTML = "Muchas gracias!";
    }
}