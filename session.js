sessionStorage.clear;

function enviarSessao() { //funtion e uma declaracao de uma varialvel
    let txt_login = document.getElementById("txt_login");
    let div_sessoes = document.getElementById("div_sessoes");

    let sessao_digitada = sessionStorage.getItem(txt_login.value);//declarndo umavariavel que vai receber 
    if(sessao_digitada == null) {
        sessionStorage.setItem(txt_login.value, txt_login.value);
        console.log("A sessao" + txt_login.value + "foi logada com sucesso.");
        div_sessoes.innerHTML += "<br/> \r\n" + txt_login.value;//prblema nao identificado
    } else {
        console.error("Nao foi possivel enviar o login " + txt_login.value + ", pois ja ha uma sessaologada com esse nome ");
    }
}