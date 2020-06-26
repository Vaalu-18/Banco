function obtenerDestinos(){
    $.ajax({
        url: "../php/verificaSesion.php",
        type: "post",
        cache: false,
        success: function(result1){
            //alert(result1);
            if(result1=="0"){
                $('#divContainerMenu').css('display','block');
                $.ajax({
                    url: "../php/obtenerDestinos.php",
                    type: "post",
                    processData: false,
                    success: function(result){
                        alert (result);
                        var producto = JSON.parse(result);
                        alert (producto);
                        for(var i=1; i<producto.length; i++){
                            //cadena ='<tr><td id="nombreAvion">'+producto[i].avion+'</td><td>'+producto[i].destino+'</td><td>'+producto[i].costo+'</td><td>'+producto[i].fechaSalida+'</td><td>'+producto[i].horaSalida+'</td><td><button type="button" title="Comprar boleto" class="btn btn-success" onClick="btnComprarBoleto(\''+producto[i].avion+'\',\''+producto[i].destino+'\',\''+producto[i].fechaSalida+'\','+producto[i].horaSalida+','+producto[i].costo+')"><i class="fas fa-ticket-alt"></i></button>     <button type="button" class="btn btn-info" title="Buscar mi boleto" onClick="btnBuscarBoleto(\''+producto[i].fechaSalida+'\')"><i class="fas fa-book"></i></button>     <button type="button" class="btn btn-warning" title="Actualizar vuelo" onClick="btnEditarDestino(\''+producto[i].avion+'\',\''+producto[i].destino+'\',\''+producto[i].fechaSalida+'\','+producto[i].horaSalida+','+producto[i].costo+')" style="display: none;" id="btnEditarDestino"><i class="fas fa-edit"></i></button>     <button type="button" class="btn btn-danger" title="Eliminar vuelo" onClick="btnEliminarDestino(\''+producto[i].avion+'\')" style="display: none;" id="btnEliminarDestino"><i class="fas fa-trash-alt"></i></button></td>';
                            cadena2 ='<tr><td id="nombreAvion">'+producto[i].avion+'</td><td>'+producto[i].destino+'</td><td>'+producto[i].costo+'</td><td>'+producto[i].fechaSalida+'</td><td>'+producto[i].horaSalida+'</td><td><button type="button" title="Comprar boleto" class="btn btn-success" onClick="btnComprarBoleto(\''+producto[i].avion+'\',\''+producto[i].destino+'\',\''+producto[i].fechaSalida+'\','+producto[i].horaSalida+','+producto[i].costo+')"><i class="fas fa-ticket-alt"></i></button>     <button type="button" class="btn btn-info" title="Buscar mi boleto" onClick="btnBuscarBoleto(\''+producto[i].fechaSalida+'\')"><i class="fas fa-book"></i></button></td>';
                            $('#pintarFilas').append(cadena2);
                        }
                    }
                });
            }else{
                if(result1=="admin"){
                    $('#divContainerMenu').css('display','none');
                    $('#divMenu').css('display', 'block');
                    $('#hNombreUsuario').html(result1);
                    $('#anclaEstancias').css('display', 'block');
                    $('#anclaTarjetas').css('display', 'block');
                    $('#btnEditarDestino').css('display', 'inline');
                    $('#btnEliminarDestino').css('display', 'inline');
                    $.ajax({
                        url: "../php/obtenerDestinos.php",
                        type: "post",
                        processData: false,
                        success: function(result){
                            alert (result);
                            var producto = JSON.parse(result);
                            alert (producto);
                            for(var i=1; i<producto.length; i++){
                                cadena ='<tr><td id="nombreAvion">'+producto[i].avion+'</td><td>'+producto[i].destino+'</td><td>'+producto[i].costo+'</td><td>'+producto[i].fechaSalida+'</td><td>'+producto[i].horaSalida+'</td><td><button type="button" title="Comprar boleto" class="btn btn-success" onClick="btnComprarBoleto(\''+producto[i].avion+'\',\''+producto[i].destino+'\',\''+producto[i].fechaSalida+'\','+producto[i].horaSalida+','+producto[i].costo+')"><i class="fas fa-ticket-alt"></i></button>     <button type="button" class="btn btn-info" title="Buscar mi boleto" onClick="btnBuscarBoleto(\''+producto[i].fechaSalida+'\')"><i class="fas fa-book"></i></button>     <button type="button" class="btn btn-warning" title="Actualizar vuelo" onClick="btnEditarDestino(\''+producto[i].avion+'\',\''+producto[i].destino+'\',\''+producto[i].fechaSalida+'\','+producto[i].horaSalida+','+producto[i].costo+')"><i class="fas fa-edit"></i></button>     <button type="button" class="btn btn-danger" title="Eliminar vuelo" onClick="btnEliminarDestino(\''+producto[i].avion+'\')"><i class="fas fa-trash-alt"></i></button></td>';
                                //cadena2 ='<tr><td id="nombreAvion">'+producto[i].avion+'</td><td>'+producto[i].destino+'</td><td>'+producto[i].costo+'</td><td>'+producto[i].fechaSalida+'</td><td>'+producto[i].horaSalida+'</td><td><button type="button" title="Comprar boleto" class="btn btn-success" onClick="btnComprarBoleto(\''+producto[i].avion+'\',\''+producto[i].destino+'\',\''+producto[i].fechaSalida+'\','+producto[i].horaSalida+','+producto[i].costo+')"><i class="fas fa-ticket-alt"></i></button>     <button type="button" class="btn btn-info" title="Buscar mi boleto" onClick="btnBuscarBoleto(\''+producto[i].fechaSalida+'\')"><i class="fas fa-book"></i></button></td>';
                                $('#pintarFilas').append(cadena);
                            }
                        }
                    });
                }else{
                    $('#divContainerMenu').css('display','none');
                    $('#divMenu').css('display', 'block');
                    $('#hNombreUsuario').html(result1);
                    $.ajax({
                        url: "../php/obtenerDestinos.php",
                        type: "post",
                        processData: false,
                        success: function(result){
                            alert (result);
                            var producto = JSON.parse(result);
                            alert (producto);
                            for(var i=1; i<producto.length; i++){
                                //cadena ='<tr><td id="nombreAvion">'+producto[i].avion+'</td><td>'+producto[i].destino+'</td><td>'+producto[i].costo+'</td><td>'+producto[i].fechaSalida+'</td><td>'+producto[i].horaSalida+'</td><td><button type="button" title="Comprar boleto" class="btn btn-success" onClick="btnComprarBoleto(\''+producto[i].avion+'\',\''+producto[i].destino+'\',\''+producto[i].fechaSalida+'\','+producto[i].horaSalida+','+producto[i].costo+')"><i class="fas fa-ticket-alt"></i></button>     <button type="button" class="btn btn-info" title="Buscar mi boleto" onClick="btnBuscarBoleto(\''+producto[i].fechaSalida+'\')"><i class="fas fa-book"></i></button>     <button type="button" class="btn btn-warning" title="Actualizar vuelo" onClick="btnEditarDestino(\''+producto[i].avion+'\',\''+producto[i].destino+'\',\''+producto[i].fechaSalida+'\','+producto[i].horaSalida+','+producto[i].costo+')" style="display: none;" id="btnEditarDestino"><i class="fas fa-edit"></i></button>     <button type="button" class="btn btn-danger" title="Eliminar vuelo" onClick="btnEliminarDestino(\''+producto[i].avion+'\')" style="display: none;" id="btnEliminarDestino"><i class="fas fa-trash-alt"></i></button></td>';
                                cadena2 ='<tr><td id="nombreAvion">'+producto[i].avion+'</td><td>'+producto[i].destino+'</td><td>'+producto[i].costo+'</td><td>'+producto[i].fechaSalida+'</td><td>'+producto[i].horaSalida+'</td><td><button type="button" title="Comprar boleto" class="btn btn-success" onClick="btnComprarBoleto(\''+producto[i].avion+'\',\''+producto[i].destino+'\',\''+producto[i].fechaSalida+'\','+producto[i].horaSalida+','+producto[i].costo+')"><i class="fas fa-ticket-alt"></i></button>     <button type="button" class="btn btn-info" title="Buscar mi boleto" onClick="btnBuscarBoleto(\''+producto[i].fechaSalida+'\')"><i class="fas fa-book"></i></button></td>';
                                $('#pintarFilas').append(cadena2);
                            }
                        }
                    });
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
function abrirPopUpRegistro(){
    $('#overlay').css('display', 'flex');
}
function cerrarPopUpRegistroDestino(i){
    $('#overlay').css('display', 'none');
    $('#overlay1').css('display', 'none');
    $('#overlay2').css('display', 'none');
    $('#overlay4').css('display', 'none');
}
function cerrarPagoTarjeta(i){
    $('#overlay3').css('display', 'none');
}
function cerrarPopUpBuscarBoleto(i){
    $('#overlay5').css('display', 'none');
    $('#pNotaAsiento').css('display', 'none');
    $('#cancelarActualizacionBoleto').css('display', 'none');
    $('#guardarCambiosBoleto').css('display', 'none');
    $('#cambiarBotonesActualizar').css('display', 'inline');
    $('#btnEliminarBoleto').css('display', 'inline');
}
function btnRegistroDestino(){
    var form = new FormData(document.getElementById("formularioRegistrarDestino"));
    $.ajax({
        url: "../php/registrarDestino.php",
        type: "post",
        data: form,
        cache: false,
        contentType: false,
        processData: false,
        success: function(result){
            alert (result);
            location.href="destinos.html";
        }
    });
}
function btnEliminarDestino(i){
    //alert(i);
    var avion = i;
    $.ajax({
        url: "../php/variableSesionDestinoEliminado.php",
        data: {'avion': avion},
        type: "post",
        cache: false,
        success: function(result){
            //alert (result);
            $('#modalConfirmarEliminarDestino').modal();
        }
    });
}
function confirmarEliminarDestino(){
    $.ajax({
        url: "../php/confirmarEliminarDestino.php",
        type: "post",
        cache: false,
        success: function(result){
            alert (result);
            location.href="destinos.html";
            //$('#modalConfirmarEliminarCliente').modal();
        }
    });
}
function btnEditarDestino(a, b, c, d, e){
    $('#overlay1').css('display', 'flex');
    $('#txtNombreAvion1').val(a);
    $('#txtNombreDestino1').val(b);
    $('#txtFechaVuelo1').val(c);
    $('#txtHoraVuelo1').val(d);
    $('#txtCosto1').val(e)
}
function btnActualizarDestino(){
    var form = new FormData(document.getElementById("formularioActualizarDestino"));
    $.ajax({
        url: "../php/actualizarDestino.php",
        type: "post",
        data: form,
        cache: false,
        contentType: false,
        processData: false,
        success: function(result){
            alert(result);
            location.href= "destinos.html";
        }
    });
}
function btnComprarBoleto(a, b, c, d, e){
    $('#overlay2').css('display', 'flex');
    $('#txtNombreAvion2').val(a);
    $('#txtNombreDestino2').val(b);
    $('#txtFechaVuelo2').val(c);
    $('#txtHoraVuelo2').val(d);
    $('#txtCosto2').val(e);
}
function btnSiguienteCompra(){
    var form = new FormData(document.getElementById("formularioComprarBoleto"));
    $.ajax({
        url: "../php/variablesDeCompra.php",
        type: "post",
        data: form,
        cache: false,
        contentType: false,
        processData: false,
        success: function(result){
            $('#overlay3').css('display', 'flex');
            $('#escuchaTarjeta').val('55');
            $('#monto').val($('#txtCosto2').val());
            /*alert(result);
            location.href= "clientes.html";*/

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
            respuestaBanco = result.substring(1, 8);
            if(respuestaBanco=="Banco 3"){
                $.ajax({
                    url: "../php/agregarNuevaCompraVuelo.php",
                    type: "post",
                    data: form,
                    cache: false,
                    contentType: false,
                    processData: false,
                    success: function(result1){
                        alert(result1);
                        location.href="destinos.html";
                    }
                });
            }else{
                alert (result);
            }
        }
    });
}
function btnBuscarBoleto(a){
    $('#overlay4').css('display', 'flex');
    $('#txtFechaVueloBoleto').val(a);
}
function buscarBoleto(){
    var form = new FormData(document.getElementById("formularioBuscarBoleto"));
    $.ajax({
        url: "../php/buscarBoletoComprado.php",
        type: "post",
        data: form,
        cache: false,
        contentType: false,
        processData: false,
        success: function(result){
            $('#overlay5').css('display', 'flex');
            //alert (result)
            var producto = JSON.parse(result);
            $('#pintarBoleto').html("");
            for(var i=1; i<producto.length; i++){
                var cadena ='<input disabled type="text" class="form-control bg-light border-top-0 border-right-0 border-left-0 rounded-0 border-secondary" id="txtNombrePasajeroBoleto1" name="txtNombrePasajeroBoleto1" placeholder="Nombre completo" value="'+producto[i].nombre+'"><input disabled type="text" class="form-control bg-light border-top-0 border-right-0 border-left-0 rounded-0 border-secondary" id="txtNombreAvionBoleto1" name="txtNombreAvionBoleto1" placeholder="Nombre del avión" value="'+producto[i].avion+'"><input disabled type="text" class="form-control bg-light border-top-0 border-right-0 border-left-0 rounded-0 border-secondary" id="txtNombreDestinoBoleto1" name="txtNombreDestinoBoleto1" placeholder="Destino" style="width: 40%; float: left;" value="'+producto[i].destino+'"><input disabled type="text" class="form-control bg-light border-top-0 border-right-0 border-left-0 rounded-0 border-secondary" id="txtFechaVueloBoleto1" name="txtFechaVueloBoleto1" placeholder="Fecha de vuelo" style="width: 40%; float: right; margin-right: 75px;" value="'+producto[i].fecha+'"><input disabled type="text" class="form-control bg-light border-top-0 border-right-0 border-left-0 rounded-0 border-secondary" id="txtHoraVueloBoleto1" name="txtHoraVueloBoleto1" placeholder="Hora de vuelo" value="'+producto[i].hora+'"><input disabled type="text" class="form-control bg-light border-top-0 border-right-0 border-left-0 rounded-0 border-secondary" id="txtCostoBoleto1" name="txtCostoBoleto1" placeholder="Costo" value="'+producto[i].costo+'"><label for="nombre" >Sala</label><br><select disabled name="tipoSala1" id="tipoSala1"><option>'+producto[i].sala+'</option><option value="VIP">VIP</option><option value="normal">normal</option></select><input disabled type="text" class="form-control bg-light border-top-0 border-right-0 border-left-0 rounded-0 border-secondary" id="txtAsientoBoleto1" name="txtAsientoBoleto1" placeholder="Número de asiento" value="'+producto[i].asiento+'">';
                $('#pintarBoleto').append(cadena);
            }
        }
    });
}
function btnEliminarCompraBoleto(){
    //alert(i);
    var nombre = $('#txtNombrePasajeroBoleto').val();
    var fecha = $('#txtFechaVueloBoleto').val();
    $.ajax({
        url: "../php/variableSesionBoletoEliminado.php",
        data: {'nombre': nombre, 'fecha': fecha},
        type: "post",
        cache: false,
        success: function(result){
            //alert (result);
            $('#modalConfirmarEliminarBoleto').modal();
        }
    });
}
function confirmarEliminarBoleto(){
    $.ajax({
        url: "../php/confirmarEliminarBoleto.php",
        type: "post",
        cache: false,
        success: function(result){
            alert (result);
            location.href="destinos.html";
            //$('#modalConfirmarEliminarCliente').modal();
        }
    });
}
function btnActualizaCompraBoleto(){
    //document.getElementById('txtNombrePasajeroBoleto').disabled = false;
    //document.getElementById('txtNombreAvionBoleto').disabled = false;
    //$('#txtNombrePasajeroBoleto').prop('disabled', false);
    $('#pNotaAsiento').css('display', 'block');
    $('#cancelarActualizacionBoleto').css('display', 'inline');
    $('#guardarCambiosBoleto').css('display', 'inline');
    $('#cambiarBotonesActualizar').css('display', 'none');
    $('#btnEliminarBoleto').css('display', 'none');
    document.getElementById('txtAsientoBoleto1').disabled = false;
    document.getElementById('txtNombrePasajeroBoleto1').disabled = false;
    document.getElementById('txtNombreDestinoBoleto1').disabled = false;
    document.getElementById('txtCostoBoleto1').disabled = false;
    document.getElementById('tipoSala1').disabled = false;
    document.getElementById('txtFechaVueloBoleto1').disabled = false;
    document.getElementById('txtNombreAvionBoleto1').disabled = false;
    document.getElementById('txtHoraVueloBoleto1').disabled = false;
}
function btnCancelaActualizacionBoleto(){
    $('#pNotaAsiento').css('display', 'none');
    $('#cancelarActualizacionBoleto').css('display', 'none');
    $('#guardarCambiosBoleto').css('display', 'none');
    $('#cambiarBotonesActualizar').css('display', 'inline');
    $('#btnEliminarBoleto').css('display', 'inline');
}
function btnActualizaBoleto(){
    var form = new FormData(document.getElementById("formularioActualizarCambiosBoleto"));
    $.ajax({
        url: "../php/actualizarBoletos.php",
        type: "post",
        data: form,
        cache: false,
        contentType: false,
        processData: false,
        success: function(result){
            alert (result);
            location.href="destinos.html";
            /*$('#overlay3').css('display', 'flex');
            $('#escuchaTarjeta').val('55');
            $('#monto').val($('#txtCosto2').val());
            alert(result);
            location.href= "clientes.html";*/

        }
    });
}