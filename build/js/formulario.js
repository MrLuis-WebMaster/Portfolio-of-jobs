document.addEventListener("DOMContentLoaded", function(){
    DarkMode ();
})


// Dark
function DarkMode () {
    const btnMode = document.querySelector('#btn_mode');
    btnMode.addEventListener('click',function changeMode() {
        btnMode.classList.toggle('btn-mode--dark-mode');
        document.body.classList.toggle('dark-mode');
} );
}

//animacion del inpput

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});



// Validador para el formulario


const Datos = {
    nombre:'',
    email:'',
    celular:'',
    mensaje:''
};


const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const celular = document.querySelector("#celular");
const mensaje = document.querySelector("#mensaje");

nombre.addEventListener("input",leertexto);
email.addEventListener("input",leertexto);
celular.addEventListener("input",leertexto);
mensaje.addEventListener("input",leertexto);

function leertexto (e) {
    Datos[e.target.id]= e.target.value;
    console.log(Datos);
}

// evento del submit 

const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit",function(e){
    // validar formulario
    const {nombre, email, celular, mensaje} = Datos;
        if (nombre ==="" || email ==="" || celular ==="" || mensaje ==="" ) {
            e.preventDefault();
            mostrarmensaje ("Falta completar campos",true);
            return;
        } 
    //enviar formulario
    mostrarmensaje ("Enviado con exito");

})

function mostrarmensaje (mensaje,error=null) {
    const alerta = document.createElement("P");
    alerta.textContent= mensaje;
    if (error){
        alerta.classList.add("alerta");
    } else {
        alerta.classList.add("exito");
    }
    formulario.appendChild(alerta);

    setTimeout ( ( ) => {
        alerta.remove();
    }, 3000);
} 
