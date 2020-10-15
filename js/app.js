
$(function(){

    //mostrar instrucciones on blur
    $(":input").on('blur',function(){
        if($(this).data('info')){
            console.log($(this).data('info'));
        }
    })

    //Validación de campos que no pueden estar vacíos (requeridos)

    var obligatorios = $(".form-requerido");

    for(i=0; i<obligatorios.length;i++){
        $(obligatorios[i]).on('blur',function(){
            campoNoVacio(this) ? 
            $(this).removeClass("is-invalid").addClass("is-valid") 
            :
            $(this).removeClass("is-valid").addClass("is-invalid");
            
        });
    }
  //Validaciones específicas
  //Validación de nombre

  //Validación de email

  //Validación de 
  
})

function campoNoVacio(obj){
    console.log(obj,obj.value);
    return obj.value ? true:false;
    
}
