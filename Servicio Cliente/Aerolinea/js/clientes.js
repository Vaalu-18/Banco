function obtenerClientes(){
    $.ajax({
        url: "../php/verificaSesion.php",
        type: "post",
        cache: false,
        success: function(result){
            if(result=="0"){
                $('#divContainerMenu').css('display','block');
                $('#divContainerMenu').css('display','none');
                $('#divMenu').css('display', 'block');
                $('#hNombreUsuario').html(result);
                $('#anclaEstancias').css('display', 'block');
                $('#anclaTarjetas').css('display', 'block');
                $.ajax({
                    url: "../php/obtenerClientes.php",
                    type: "post",
                    processData: false,
                    success: function(result1){
                        alert(result1);
                        var producto = JSON.parse(result1);
                        for(var i=1; i<producto.length; i++){
                            var cadena ='<tr><th scope="row" style="display: none;">'+producto[i].id+'</th><td id="nombreClienteFila">'+producto[i].nombre+'</td><td>'+producto[i].apellido+'</td><td>'+producto[i].telefono+'</td><td>'+producto[i].correo+'</td><td>'+producto[i].formaPago+'</td>';
                            $('#pintarFilas').append(cadena);
                        }
                    }
                });
                $('#colAcciones').css('display', 'none');
            }else{
                if(result=="admin"){
                    $('#divContainerMenu').css('display','none');
                    $('#divMenu').css('display', 'block');
                    $('#hNombreUsuario').html(result);
                    $('#anclaEstancias').css('display', 'block');
                    $('#anclaTarjetas').css('display', 'block');
                    $.ajax({
                        url: "../php/obtenerClientes.php",
                        type: "post",
                        processData: false,
                        success: function(result1){
                            alert(result1);
                            var producto = JSON.parse(result1);
                            for(var i=1; i<producto.length; i++){
                                var cadena ='<tr><th scope="row" style="display: none;">'+producto[i].id+'</th><td id="nombreClienteFila">'+producto[i].nombre+'</td><td>'+producto[i].apellido+'</td><td>'+producto[i].telefono+'</td><td>'+producto[i].correo+'</td><td>'+producto[i].formaPago+'</td><td><button type="button" class="btn btn-warning" onClick="btnEditarCliente('+producto[i].id+')"><i class="fas fa-edit"></i></button>     <button type="button" class="btn btn-danger" onClick="btnEliminarCliente('+producto[i].id+')"><i class="fas fa-trash-alt"></i></button></td>';
                                $('#pintarFilas').append(cadena);
                            }
                        }
                    }); 
                }else{
                    $('#divContainerMenu').css('display','none');
                    $('#divMenu').css('display', 'block');
                    $('#hNombreUsuario').html(result);
                    $.ajax({
                        url: "../php/obtenerClientes.php",
                        type: "post",
                        processData: false,
                        success: function(result1){
                            alert(result1);
                            var producto = JSON.parse(result1);
                            for(var i=1; i<producto.length; i++){
                                var cadena ='<tr><th scope="row" style="display: none;">'+producto[i].id+'</th><td id="nombreClienteFila">'+producto[i].nombre+'</td><td>'+producto[i].apellido+'</td><td>'+producto[i].telefono+'</td><td>'+producto[i].correo+'</td><td>'+producto[i].formaPago+'</td>';
                                $('#pintarFilas').append(cadena);
                            }
                        }
                    });
                    $('#colAcciones').css('display', 'none');
                }
            }
        }
    });
}
/*function obtenerClientes(){
    $.ajax({
        url: "../php/obtenerClientes.php",
        type: "post",
        processData: false,
        success: function(result){
            var producto = JSON.parse(result);
            for(var i=1; i<producto.length; i++){
                var cadena ='<tr><th scope="row" style="display: none;">'+producto[i].id+'</th><td id="nombreClienteFila">'+producto[i].nombre+'</td><td>'+producto[i].apellido+'</td><td>'+producto[i].telefono+'</td><td>'+producto[i].correo+'</td><td>'+producto[i].formaPago+'</td><td><button type="button" class="btn btn-warning" onClick="btnEditarCliente('+producto[i].id+')"><i class="fas fa-edit"></i></button>     <button type="button" class="btn btn-danger" onClick="btnEliminarCliente('+producto[i].id+')"><i class="fas fa-trash-alt"></i></button></td>';
                $('#pintarFilas').append(cadena);
            }
        }
    });   
}*/
function abrirPopUpRegistro(){
    $('#overlay').css('display', 'flex');
}
function cerrarPopUpRegistroCliente(i){
    $('#overlay').css('display', 'none');
    $('#overlay1').css('display', 'none');
}
function btnRegistroCliente(){
    var form = new FormData(document.getElementById("formularioRegistrarCliente"));
    $.ajax({
        url: "../php/registrarCliente.php",
        type: "post",
        data: form,
        cache: false,
        contentType: false,
        processData: false,
        success: function(result){
            alert (result);
            location.href="clientes.html";
        }
    });
}
function btnEliminarCliente(i){
    var idCliente = i;
    $.ajax({
        url: "../php/variableSesionClienteEliminado.php",
        data: {'idCliente': idCliente},
        type: "post",
        cache: false,
        success: function(result){
            //alert (result);
            $('#modalConfirmarEliminarCliente').modal();
        }
    });
}
function confirmarEliminarCliente(){
    $.ajax({
        url: "../php/confirmarEliminarCliente.php",
        type: "post",
        cache: false,
        success: function(result){
            alert (result);
            location.href="clientes.html";
            //$('#modalConfirmarEliminarCliente').modal();
        }
    });
}
function btnEditarCliente(i){
    //alert ($('#nombreClienteFila').text());
    var idCliente = i;
    $.ajax({
        url: "../php/variableSesionClienteEliminado.php",
        data: {'idCliente': idCliente},
        type: "post",
        cache: false,
        success: function(result){
            //alert (result);
            $('#overlay1').css('display', 'flex');
        }
    });
}
function btnActualizarCliente(){
    var form = new FormData(document.getElementById("formularioRegistrarCliente"));
    $.ajax({
        url: "../php/actualizarCliente.php",
        type: "post",
        data: form,
        cache: false,
        contentType: false,
        processData: false,
        success: function(result){
            alert(result);
            location.href= "clientes.html";
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