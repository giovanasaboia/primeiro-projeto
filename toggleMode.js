function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // o METODO toggle faz o que está abaixo: se tiver REMOVE, se não tiver ADICIONA
  //if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  // } else {
  //  html.classList.add("light")
  // }
  //pegar a imagem
  const img = document.querySelector("#profile img")

  //substituir a img
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar-dark.png")
  }
}
