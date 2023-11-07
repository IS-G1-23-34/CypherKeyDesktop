const information = document.getElementById('info')
const navbar = document.getElementById('navbar')
const head = document.getElementById('head')
const footer = document.getElementById('footer')
const scripts = document.getElementById('scripts')
//information.innerText = `This app is using Chrome (v${window.versions.chrome()}), Node.js (v${window.versions.node()}), and Electron (v${window.versions.electron()})`


// Hacer una solicitud para obtener el contenido de nav.html
fetch('nav.html')
  .then(response => response.text())
  .then(html => {
    // Asignar el contenido a htmlFragment
    const htmlFragment = html;
    navbar.innerHTML = htmlFragment;
  })
  .catch(error => console.error('Error al obtener el archivo:', error));

  // Hacer una solicitud para obtener el contenido de head.html
fetch('head.html')
.then(response => response.text())
.then(html => {
  // Asignar el contenido a htmlFragment
  const htmlFragment = html;
  head.innerHTML = htmlFragment;
})
.catch(error => console.error('Error al obtener el archivo:', error));

  // Hacer una solicitud para obtener el contenido de footer.html
  fetch('footer.html')
  .then(response => response.text())
  .then(html => {
    // Asignar el contenido a htmlFragment
    const htmlFragment = html;
    footer.innerHTML = htmlFragment;
  })
  .catch(error => console.error('Error al obtener el archivo:', error));
    // Hacer una solicitud para obtener el contenido de scripts.html
/*fetch('scripts.html')
.then(response => response.text())
.then(html => {
  // Asignar el contenido a htmlFragment
  const htmlFragment = html;
  scripts.innerHTML = htmlFragment;
})
.catch(error => console.error('Error al obtener el archivo:', error));
*/
const func = async () => {
    const response = await window.versions.ping()
    console.log(response) // prints out 'pong'
  }
  
  func()