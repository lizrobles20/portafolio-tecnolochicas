let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2000)
  .typeString('Front-End Developer.')
  .pauseFor(2500)
  .deleteChars(40)
  .typeString('Creo diseños atractivos.')
  .pauseFor(2500)
  .deleteChars(40)
  .typeString('Implemento ideas creativas.')
  .pauseFor(2500)
  .deleteChars(40)
  .start();

  const temaOscuro = () =>{
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");
    document.querySelector("#logo-principal").setAttribute("src", "imagenes/logo-blanco-footer.png");
  }

  const temaClaro = () =>{
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
    document.querySelector("#logo-principal").setAttribute("src", "imagenes/logo-negro-nav.png");
  }

  const cambiarTema = () =>{
    document.querySelector("body").getAttribute("data-bs-theme") === "light"?
    temaOscuro() : temaClaro();
  }

  var tema = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (tema === false){
    document.querySelector("body").setAttribute("data-bs-theme", "light");
  } else{
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
  }

  

