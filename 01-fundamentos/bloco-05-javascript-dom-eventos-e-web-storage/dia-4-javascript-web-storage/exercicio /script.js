let body = document.querySelector("body");
let preferencias = {};

function adicionaConteudo() {
  let conteudoPagina =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum velit nibh, mollis nec felis eu, tristique feugiat ante. Etiam sagittis, est sed maximus interdum, arcu ex dignissim diam, consequat sollicitudin lectus nulla quis tortor. Integer ornare ullamcorper ultricies. Curabitur sit amet tellus convallis, tincidunt justo vitae, ornare mauris. Cras quis facilisis lorem. Donec vestibulum quam id aliquet tincidunt. Curabitur blandit justo eu ipsum accumsan aliquet. Donec et ex orci. Etiam mollis consectetur efficitur. Nulla quis nibh cursus, tincidunt elit vitae, mattis dolor. Fusce sed massa ut lacus varius sodales. Vivamus cursus sollicitudin purus quis suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus et sapien nec ligula vestibulum volutpat. Aliquam erat volutpat. Donec libero dui, hendrerit vitae felis nec, egestas ullamcorper arcu. ";
  return conteudoPagina;
}

function addHandler() {

  //pega todos valores dos input e coloca numa variavel
  let backgroundPref = document.getElementById("backgroundColor").value;
  let colorTextPref = document.getElementById("textColor").value;
  let textFontSizePref = document.getElementById("textFontSize").value;
  let lineHeightPref = document.getElementById("lineHeight").value;
  let fontFamilyPref = document.getElementById("fontFamily").value;
  //coloca as variaveis num objeto
  preferencias = {
    background: backgroundPref,
    color: colorTextPref,
    textFontSize: textFontSizePref,
    lineHeigh: lineHeightPref,
    fontFamily: fontFamilyPref,
  };
  //chama metodo para adicionar as preferencias
  addPreferencia(preferencias);
  localStorage.setItem('preferencias', JSON.stringify(preferencias));

}

function addPreferencia(preferencias) {

  body.style.backgroundColor = preferencias.background;
  body.style.color = preferencias.color;
  body.style.fontSize = preferencias.textFontSize;
  body.style.lineHeight = preferencias.lineHeight;
  body.style.fontFamily = preferencias.fontFamily;

}

function rstPreferencia() {

  //retorna os padrões para o valor inicial 
  body.style.backgroundColor = "white";
  body.style.color = "black";
  body.style.fontSize = "15px";
  body.style.lineHeight = "25px";
  body.style.fontFamily = "Courier New";

  //deixa os campos de preenchimentos vazios
  let backgroundPref = document.getElementById("backgroundColor").value = '';
  let colorTextPref = document.getElementById("textColor").value = '';
  let textFontSizePref = document.getElementById("textFontSize").value = '';
  let lineHeightPref = document.getElementById("lineHeight").value = '';
  let fontFamilyPref = document.getElementById("fontFamily").value = '';

  localStorage.clear();

}

window.onload = function () {
  //adiciona conteudo na pagina
  let principal = document.querySelector("#principal");
  let newConteudo = document.createElement("p");
  newConteudo.innerText = adicionaConteudo();
  principal.appendChild(newConteudo);

  //pega botão adicionar e adiciona click
  let adicionarPreferencias = document.getElementById("adicionar");
  adicionarPreferencias.addEventListener("click", addHandler);
  //pega botao resetar e adiciona click
  let resetarPreferencias = document.getElementById("resetar");
  resetarPreferencias.addEventListener("click", rstPreferencia);

  if (localStorage.getItem('preferencias') != null) {
    preferencias = JSON.parse(localStorage.getItem('preferencias'));
    addPreferencia(preferencias);
  }

};
