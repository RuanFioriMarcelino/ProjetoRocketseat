function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if(html.classList.contains('light')){
    img.setAttribute('src', './assets/avatar_oculos.png')
    img.setAttribute('alt', 'Foto do Ruan Fiori Marcelino sorrindo de oculos escuros, usando um terno cinza escuro e gravata bordo.')
  }else{
    //se tiver sem light mode, mantere a imagem normal
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute('alt', 'Foto do Ruan Fiori Marcelino sorrindo, usando um terno cinza escuro e gravata bordo.')
  }
}
