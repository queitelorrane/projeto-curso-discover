function ToggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // pegar a tag img
    const img = document.querySelector("#profile img")

    // substituir a imagem
    if(html.classList.contains('light')) {
   // se tiver light mode, adiocionar a imagem light
        img.setAttribute('src', './assets/perfil-light.png')
    } else {
        // se tiver sem light mode, manter a imagem normal
        img.setAttribute('src', './assets/perfil-dark.png')

    }




   

} 

