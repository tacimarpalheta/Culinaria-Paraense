function mostrarMenu(){
          
    let menu = document.getElementById("menu")

    if(getComputedStyle (menu).display == "none"){
        menu.style.display = "flex"
    }

    else{
        menu.style.display = "none"
    }
    
   event.preventDefault();
}

function enviar() {

    var nome = document.getElementById("nome");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}