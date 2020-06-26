function obtenerReservaciones(){
    $.ajax({
        url: "../php/obtenerReservaciones.php",
        type: "post",
        processData: false,
        success: function(result){
            var producto = JSON.parse(result);
            for(var i=1; i<producto.length; i++){
                var cadena ='<tr><th scope="row">'+producto[i].numPersonas+'</th><td>'+producto[i].tipoHabitacion+'</td><td>'+producto[i].fechaLlegada+'</td><td>'+producto[i].fechaSalida+'</td><td>'+producto[i].precio+'</td><td style="display: none;">'+producto[i].idCliente+'</td><td style="display: none;">'+producto[i].idReservacion+'</td><td>'+producto[i].status+'</td>';
                if(producto[i].status=="Vigente" || producto[i].status=="vigente"){
                    cadena = cadena+'<td><button type="button" class="btn btn-warning" onClick="btnEditarReservacion('+producto[i].fechaLlegada+','+producto[i].fechaSalida+','+producto[i].numPersonas+','+producto[i].idCliente+','+producto[i].idReservacion+')"><i class="fas fa-edit"></i></button>     <button type="button" class="btn btn-danger" onClick="btnCancelarReservacion('+producto[i].idReservacion+')"><i class="fas fa-trash-alt"></i></button>     <button type="button" class="btn btn-info" onClick="btnPagarReservacion('+producto[i].precio+')"><i class="far fa-credit-card"></i></button></td></tr>';
                }else{
                    cadena = cadena+'<td><button type="button" class="btn btn-warning" onClick="btnEditarReservacion('+producto[i].fechaLlegada+','+producto[i].fechaSalida+','+producto[i].numPersonas+','+producto[i].idCliente+','+producto[i].idReservacion+')"><i class="fas fa-edit"></i></button>     <button type="button" class="btn btn-danger" onClick="btnCancelarReservacion('+producto[i].idReservacion+')"><i class="fas fa-trash-alt"></i></button></td></td></tr>';    
                }
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
function abrirPopUpRegistroReservacion(){
    $('#overlay').css('display', 'flex');
    $('#overlay1').css('display', 'flex');
}
function cerrarPopUpRegistroReservacion(i){
    $('#overlay').css('display', 'none');
    $('#overlay1').css('display', 'none');
}
function btnRegistroReservacion(){
    var form = new FormData(document.getElementById("formularioRegistrarReservacion"));
    $.ajax({
        url: "../php/registrarReservacion.php",
        type: "post",
        data: form,
        cache: false,
        contentType: false,
        processData: false,
        success: function(result){
            alert (result);
            location.href="reservaciones.html";
        }
    })
}
function btnCancelarReservacion(i){
    var numReservacion = i;
    $.ajax({
        url: "../php/variableSesionReservacionCancelada.php",
        data: {'numReservacion': numReservacion},
        type: "post",
        cache: false,
        success: function(result){
            alert (result);
            $('#modalConfirmarCancelarReservacion').modal();
        }
    });
}
function confirmarCancelarReservacion(){
    $.ajax({
        url: "../php/confirmarCancelarReservacion.php",
        type: "post",
        cache: false,
        success: function(result){
            alert (result);
            location.href="reservaciones.html";
            //$('#modalConfirmarEliminarCliente').modal();
        }
    });
}
function btnEditarReservacion(a, b, c, d, e){
    $('#overlay1').css('display', 'flex');
    $('#txtFechaLlegada1').val(a);
    $('#txtFeachaSalida1').val(b);
    $('#txtNumeroPersonas1').val(c);
    $('#txtIdCliente1').val(d);
    $('#txtIdReservacion').val(e);
}
function btnActualizarReservacion(){
    var form = new FormData(document.getElementById("formularioModificarReservacion"));
    $.ajax({
        url: "../php/actualizarReservacion.php",
        type: "post",
        data: form,
        cache: false,
        contentType: false,
        processData: false,
        success: function(result){
            alert(result);
            location.href= "reservaciones.html";
        }
    });
}
function escuchaTarjet(i){
    var cadena= $(i).val();
    for(var o=0; o<19;o++){
        if(cadena.length==4){
            $(i).val(cadena + "-");
        }
        if(cadena.length==9){
            $(i).val(cadena + "-");
        }
        if(cadena.length==14){
            $(i).val(cadena + "-");
        }
        /*if(cadena.length==20){
            $('#repite').attr('style','display:none;');
        }if(cadena.length<20){
            $('#repite').attr('style','display:block;');
        }*/
        var tarjeta = $(i).val().substring(0,4)+$(i).val().substring(5,9)+$(i).val().substring(10,14)+$(i).val().substring(15,19);
    }
    $('#escuchaTarjetaRepite').val(tarjeta);
}
function escuchaFechaCa(o){
    //var cadena= $(o).val();
    for(var i=0; i<5;i++){
        if($('#escuchaFechaCad').val().length==2){
            $('#escuchaFechaCad').val($('#escuchaFechaCad').val() + "/");
        }
        //$('#repite').val($('#escuchaFechaCad').val());
        var fechaCad = $('#escuchaFechaCad').val().substring(0,2)+$('#escuchaFechaCad').val().substring(3,5);
        $('#escuchaFechaCadRepite').val(fechaCad);
    }
}
function realizarPague(){
    var form = new FormData(document.getElementById("formularioPago"));
    var respuestaBanco = "";
    $.ajax({
        url: "../php/registrarCompraBoleto.php",
        type: "post",
        data: form,
        cache: false,
        contentType: false,
        processData: false,
        success: function(result){
            alert (result);
            location.href="reservaciones.html"
        }
    });
}
function btnPagarReservacion(i){
    $('#overlay3').css('display', 'flex');
    $('#monto').val(i);
    $('#escuchaTarjeta').val("6");
}
function cerrarPagoTarjeta(i){
    $('#overlay3').css('display', 'none');
}