function obtenerEstancias(){
    $.ajax({
        url: "../php/obtenerEstancias.php",
        type: "post",
        processData: false,
        success: function(result){
            var producto = JSON.parse(result);
            for(var i=1; i<producto.length; i++){
                var cadena ='<tr><th scope="row">'+producto[i].numHabitacion+'</th><td>'+producto[i].numPersonas+'</td><td>'+producto[i].tipoHabitacion+'</td><td>'+producto[i].fechaCheckIn+'</td><td>'+producto[i].fechaCheckOut+'</td><td>'+producto[i].status+'</td><td>'+producto[i].precio+'</td><td style="display: none;">'+producto[i].idCliente+'</td><td style="display: none;">'+producto[i].idEstancia+'</td><td><button type="button" class="btn btn-warning" onClick="btnEditarReservacion('+producto[i].fechaLlegada+','+producto[i].fechaSalida+','+producto[i].numPersonas+','+producto[i].idCliente+','+producto[i].idReservacion+')"><i class="fas fa-edit"></i></button>     <button type="button" class="btn btn-danger" onClick="btnCancelarReservacion('+producto[i].idReservacion+')"><i class="fas fa-trash-alt"></i></button></td>';
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
}
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
            //alert(result);
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