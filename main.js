let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Desarrollo sitios web.')
  .pauseFor(300)
  .deleteChars(30)
  .typeString('Creo diseños atractivos.')
  .pauseFor(300)
  .deleteChars(40)
  .typeString('Optimizo experiencia del usuario.')
  .pauseFor(300)
  .deleteChars(30)
  .start();

