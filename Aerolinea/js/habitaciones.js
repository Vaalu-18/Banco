function obtenerHabitaciones(){
    $.ajax({
        url: "../php/verificaSesion.php",
        type: "post",
        cache: false,
        success: function(result){
            if(result=="0"){
                $('#divContainerMenu').css('display','block');
                $.ajax({
                    url: "../php/obtenerHabitaciones.php",
                    type: "post",
                    processData: false,
                    success: function(result1){
                        alert(result1);
                        var producto = JSON.parse(result1);
                        for(var i=1; i<producto.length; i++){
                            var cadena ='<tr><th scope="row">'+producto[i].numHabitacion+'</th><td>'+producto[i].piso+'</td><td>'+producto[i].numCamas+'</td><td>'+producto[i].cupoPersonas+'</td><td>'+producto[i].tipoHabitacion+'</td><td>'+producto[i].status+'</td></tr>';
                            $('#pintarFilas').append(cadena);
                        } 
                        $('#colAcciones').css('display', 'none');
                    }
                });
            }else{
                if(result=="admin"){
                    $('#divContainerMenu').css('display','none');
                    $('#divMenu').css('display', 'block');
                    $('#hNombreUsuario').html(result);
                    $('#anclaEstancias').css('display', 'block');
                    $('#anclaTarjetas').css('display', 'block');
                    $.ajax({
                        url: "../php/obtenerHabitaciones.php",
                        type: "post",
                        processData: false,
                        success: function(result1){
                            alert(result1);
                            var producto = JSON.parse(result1);
                            for(var i=1; i<producto.length; i++){
                                var cadena ='<tr><th scope="row">'+producto[i].numHabitacion+'</th><td>'+producto[i].piso+'</td><td>'+producto[i].numCamas+'</td><td>'+producto[i].cupoPersonas+'</td><td>'+producto[i].tipoHabitacion+'</td><td>'+producto[i].status+'</td><td><button type="button" class="btn btn-warning" onClick="btnEditarHabitacion('+producto[i].numHabitacion+','+producto[i].piso+','+producto[i].numCamas+','+producto[i].cupoPersonas+')"><i class="fas fa-edit"></i></button>     <button type="button" class="btn btn-danger" onClick="btnEliminarHabitacion('+producto[i].numHabitacion+')"><i class="fas fa-trash-alt"></i></button></td></tr>';
                                $('#pintarFilas').append(cadena);
                            } 
                            $('#btnRegistrarHabitacion').css('display', 'block');
                        }
                    });
                }else{
                    $('#divContainerMenu').css('display','none');
                    $('#divMenu').css('display', 'block');
                    $('#hNombreUsuario').html(result);
                    $.ajax({
                        url: "../php/obtenerHabitaciones.php",
                        type: "post",
                        processData: false,
                        success: function(result1){
                            alert(result1);
                            var producto = JSON.parse(result1);
                            for(var i=1; i<producto.length; i++){
                                var cadena ='<tr><th scope="row">'+producto[i].numHabitacion+'</th><td>'+producto[i].piso+'</td><td>'+producto[i].numCamas+'</td><td>'+producto[i].cupoPersonas+'</td><td>'+producto[i].tipoHabitacion+'</td><td>'+producto[i].status+'</td></tr>';
                                $('#pintarFilas').append(cadena);
                            } 
                            $('#colAcciones').css('display', 'none');
                        }
                    });
                }
            }
        }
    });
}
/*function obtenerHabitaciones(){
    $.ajax({
        url: "../php/obtenerHabitaciones.php",
        type: "post",
        processData: false,
        success: function(result){
            var producto = JSON.parse(result);
            for(var i=1; i<producto.length; i++){
                var cadena ='<tr><th scope="row">'+producto[i].numHabitacion+'</th><td>'+producto[i].piso+'</td><td>'+producto[i].numCamas+'</td><td>'+producto[i].cupoPersonas+'</td><td>'+producto[i].tipoHabitacion+'</td><td>'+producto[i].status+'</td><td><button type="button" class="btn btn-warning" onClick="btnEditarHabitacion('+producto[i].numHabitacion+','+producto[i].piso+','+producto[i].numCamas+','+producto[i].cupoPersonas+')"><i class="fas fa-edit"></i></button>     <button type="button" class="btn btn-danger" onClick="btnEliminarHabitacion('+producto[i].numHabitacion+')"><i class="fas fa-trash-alt"></i></button></td></tr>';
                $('#pintarFilas').append(cadena);
            } 
        }
    });
    $.ajax({
        url: "../php/verificaSesion.php",
        type: "post",
        cache: false,
        success: function(result){
            if(result=="0"){
                $('#divContainerMenu').css('display','block');
            }else{
                if(result=="admin"){
                    $('#divContainerMenu').css('display','none');
                    $('#divMenu').css('display', 'block');
                    $('#hNombreUsuario').html(result);
                    $('#anclaEstancias').css('display', 'block');
                    $('#anclaTarjetas').css('display', 'block');
                }else{
                    $('#divContainerMenu').css('display','none');
                    $('#divMenu').css('display', 'block');
                    $('#hNombreUsuario').html(result);
                }
            }
        }
    });
}*/
function iniciarSesionUsuario(){
    var form = new FormData(document.getElementById("formularioInicioSesión"));
    $.ajax({
        url: "../php/iniciarSesionUsuario.php",
        type: "post",
        data: form,
        cache: false,
        contentType: false,
        processData: false,
        success: function(result){
            if(result=="admin"){
                $('#divContainerMenu').css('display','none');
                $('#divMenu').css('display', 'block');
                $('#hNombreUsuario').html(result);
                $('#anclaEstancias').css('display', 'block');
                $('#anclaTarjetas').css('display', 'block');
            }else{
                $('#divContainerMenu').css('display','none');
                $('#divMenu').css('display', 'block');
                $('#hNombreUsuario').html(result);
            }
        }
    });
}
function abrirPopUpRegistroHbaitacion(){
    $('#overlay').css('display', 'flex');
}
function cerrarPopUpRegistroHabitacion(i){
    $('#overlay').css('display', 'none');
    $('#overlay1').css('display', 'none');
}
function btnRegistroHabitacion(){
    var form = new FormData(document.getElementById("formularioRegistrarHabitacion"));
    $.ajax({
        url: "../php/registrarHabitacion.php",
        type: "post",
        data: form,
        cache: false,
        contentType: false,
        processData: false,
        success: function(result){
            alert (result);
            location.href="habitaciones.html";
        }
    })
}
function btnEliminarHabitacion(i){
    var numHabitacion = i;
    $.ajax({
        url: "../php/variableSesionHabitacionEliminado.php",
        data: {'numHabitacion': numHabitacion},
        type: "post",
        cache: false,
        success: function(result){
            alert (result);
            $('#modalConfirmarEliminarHabitacion').modal();
        }
    });
}
function confirmarEliminarHabitacion(){
    $.ajax({
        url: "../php/confirmarEliminarHabitacion.php",
        type: "post",
        cache: false,
        success: function(result){
            alert (result);
            location.href="habitaciones.html";
            //$('#modalConfirmarEliminarCliente').modal();
        }
    });
}
function btnEditarHabitacion(a, b, c, d){
    $('#overlay1').css('display', 'flex');
    $('#txtNumeroHabitacion1').val(a);
    $('#txtNumeroPiso1').val(b);
    $('#txtNumeroCamas1').val(c);
    $('#txtNumeroPersonas1').val(d);
    /*$('#tipoHabitacion').value(e);
    $('#status').value(f);*/
}
function btnActualizarHabitacion(){
    var form = new FormData(document.getElementById("formularioActualizarHabitacion"));
    $.ajax({
        url: "../php/actualizarHabitacion.php",
        type: "post",
        data: form,
        cache: false,
        contentType: false,
        processData: false,
        success: function(result){
            alert(result);
            location.href= "habitaciones.html";
        }
    });
}