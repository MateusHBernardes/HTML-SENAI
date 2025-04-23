function validaFaleConosco() {
/*    if (document.frmfaleconosco.txtnome.value=="") {
        alert("Preencha o campo Nome");
        document.frmfaleconosco.txtnome.focus();
        return false;
    }
*/
    var nome = document.frmfaleconosco.txtnome.value;
    var expRegNome = new RegExp("^[a-zA-ZÀ-ÿ\\s]+$");

    if (!expRegNome.test(nome)) {
        alert("Preencha o campo Nome corretamente");
        document.frmfaleconosco.txtnome.focus();
        return false;
    }

    if (document.frmfaleconosco.txtfone.value=="") {
        alert("Preencha o campo telefone");
        document.frmfaleconosco.txtfone.focus();
        return false;
    }

    if (document.frmfaleconosco.txtemail.value=="") {
        alert("Preencha o campo E-mail");
        document.frmfaleconosco.txtemail.focus();
        return false;

    }
    if (document.frmfaleconosco.selmotivo.value=="") {
        alert("Escolha um motivo");
        document.frmfaleconosco.selmotivo.focus();
        return false;
    }
    return true;
} 

function verificaMotivo(motivo) {
    var elemento = document.getElementById("opcaoProduto");

    if(motivo=="PR") {
        var select = document.createElement("select");
        select.setAttribute("nome", "selproduto");

        var option = document.createElement("option");
        option.setAttribute("value", "");

        var texto = document.createTextNode("Escolha");
        option.appendChild(texto);

        select.appendChild(option);

        var option =document.createElement("option");
        option.setAttribute("value", "FR");

        var texto = document.createTextNode("Freezar");
        option.appendChild(texto);

        select.appendChild(option);

        var option = document.createElement("option");
        option.setAttribute("value", "GE");

        var texto = document.createTextNode("Geladeira");
        option.appendChild(texto);

        select.appendChild(option);

        elemento.appendChild(select);
    } else {
        if (elemento.firstChild) {
            elemento.removeChild(elemento.firstChild);
        }
    }
}
