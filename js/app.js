
$(function(){
    
    var obligatorios = $(".form-requerido");
    var campoNombre = $("#nombre");

    //evento on submit del form
    // acá se disparan las validaciones(se miran los campos uno por uno y se le asigna la valid o invalid)
    //y se retorna true si está todo bien
    $("#elForm").on('submit', function () {
        validarNombre(campoNombre);        
        validarDni($("#dni"));        
        return false;
    })
        
    $("#nombre").on('blur', function(){
        //acá si paso this en vez del selector me tira error Is Not a Function
        validarNombre ($("#nombre"));
    });

    // //mostrar instrucciones onfocus
    // $(":input").on('focus',function(){
    //     if($(this).data('info')){
    //         ($(this).next("small").html($(this).data('info')));
    //         ($(this).next("small").addClass("justify-content-xl-end"));
    //     }
    // })

    // //borrar instrucciones onblur
    // $(":input").on('blur',function(){
    //     if($(this).data('info')){
    //         ($(this).next("small").html(""));
    //     }
    // })

    //Se ponen en rojo los campos que quedan vacíos

        // for(i=0; i<obligatorios.length;i++){
        //     $(obligatorios[i]).on('blur',function(){
        //         campoNoVacio(this) ? 
        //         $(this).removeClass("is-invalid").addClass("is-valid") 
        //         :
        //         $(this).removeClass("is-valid").addClass("is-invalid");
                
        //     });
        // }

  //Validación de nombre (no menos de 2 caracteres ni más de 40,)
  


})//----------------Hasta acá la función on page load ----------------------------



//esta función recibe un campo, un booleano para saber si es valido 
// y un mensaje que se muestra en el texto small debajo del campo
//depende el booleano recibido el texto small se pone rojo o verde
//y el propio campo se pone valid o invalid
function esValidoONo(campo, valor, msj) {
    if(valor){
        campo.removeClass("is-invalid").addClass("is-valid");
        campo.next("small").removeClass("text-danger").addClass("text-success");
    }else{
        campo.removeClass("is-valid").addClass("is-invalid");
        campo.next("small").removeClass("text-success").addClass("text-danger");
    }
    campo.next("small").html(msj);
}

function validarNombre(nombre){
    let retorno = false;
    let msjError = "";
    if(nombre.val().length < 2){
        msjError = "Nombre muy corto";
    }else if(nombre.val().length > 40){
        msjError = "Nombre muy largo";
    }else{
        msjError = "Ok.";
        retorno = true;
    }
    esValidoONo(nombre,retorno,msjError);   
    return retorno;
}

//validación de DNI, solamente números, no menos de 7 caracteres y no más de 9
function validarDni(dni){
    let retorno = false;
    let msjError = "";
    if(noEsNumerico(dni)){
        msjError = "No se permiten símbolos no numéricos (0-9)";
    }else if(dni.val().length < 7){
        msjError = "DNI muy corto";
    }else if(dni.val().length > 9){
        msjError = "DNI muy largo";
    }else{
        msjError = "Ok.";
        retorno = true;    }
    esValidoONo(dni,retorno,msjError);   
    return retorno;
}

function noEsNumerico(campo){
    //algunas soluciones que no me convencieron: https://stackoverflow.com/questions/995183/how-to-allow-only-numeric-0-9-in-html-inputbox-using-jquery
    
    let value = campo.val();
    let i=0;
    let retorno = false;
    console.log("La cadena evaluada es: " + value + " y tiene un largo de " + value.length);

    while(i<value.length && !retorno){
        console.log("el ascci del caracter " + value[i] + " es: " + value.charCodeAt(i));
        if(value.charCodeAt(i) <48 || value.charCodeAt(i) > 57){
            retorno = true;
        }else{
           i++;
        }
    }
    return  retorno;
}

function campoNoVacio(obj){
    return obj.value ? true:false;    
}

function validarForm(){
    return false;
}
