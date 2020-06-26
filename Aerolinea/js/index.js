function construyeIndex(){
    $.ajax({
        url: "php/verificaSesion.php",
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
        url: "php/iniciarSesionUsuario.php",
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