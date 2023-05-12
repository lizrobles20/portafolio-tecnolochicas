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
  .typeString('Mejoro la experiencia del usuario.')
  .pauseFor(2500)
  .deleteChars(40)
  .start();

