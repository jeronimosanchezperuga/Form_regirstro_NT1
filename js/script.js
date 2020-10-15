// $(function) es una referencia al evento document ready, se ejecuta cuando se cargó la página
$(function(){
    //lo primero que hacemos es deshabilitar el botón de submit (ojo que sigue andando el submit con el Enter)
    $("#btnSubmit").prop('disabled',true);

    // $(.nombreClase) es una forma abreviada de obtener los elementos que tienen determinada clase
    var requeridos = $(".form-requerido");
  
    var mail=false;
    var pass= false;

    //validación al presionar el botón de submit o presionar Enter
    $("#elForm").on('submit',function(){
        //chequeo el mail
        mail = validarMail($("#inputEmail"));
        //chequeo el pass
        $("#inputPassword").focus();
        return mail && pass ? true : false;
    })
    // acá itero todos los elementos que tienen la clase form-requerido
    // para asignarlesel comportamiento ante el evento onblur
    for(i=0; i<requeridos.length;i++){
        // evento=función anónima(){} para hacer algo ante un evento (tiene que estar montado a un elemento)
        requeridos[i].onblur = function(){
            if(!campoNoVacio(this)){
                this.classList.remove("is-valid");
                this.classList.add("is-invalid");
                $("#btnSubmit").prop('disabled',true);
                this.focus();
            }else{
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                $("#btnSubmit").prop('disabled',false); 
            }
            console.log(this.id, campoNoVacio(this));
        }     
    }
}
)

function campoNoVacio(obj){
    return obj.value ? true:false;
}

// obtengo el elemnto taggeado campoEmail
// var campoMail = document.getElementById("inputEmail").onblur = function(){
//     console.log(campoMail);
// };