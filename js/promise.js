//PROMISES
//resolve es cuando es correcto
//reject cuando hay error
// const aplicarDescuento = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let descuento = false;
//     if (descuento) {
//       resolve('Descuento aplicado!')
//     } else {
//       reject('No se pudo aplicar el descuento!')
//     }
//   }, 3000);
// });
//siempre que se muestre pending es porque le falta algo a la promesa, le falta el .then
// aplicarDescuento.then(resultado => {
//   console.log(resultado);
// }).catch(error => {
//   console.log(error);
// })

//consultar una api con promise
//AJAX Y FETCH API

const descargarUsuarios = (cantidad) =>
  new Promise((resolve, reject) => {
    //pasar la cantidad a la api
    const api = `https://randomuser.me/api/?results=${cantidad}`;

    //llamado al ajax
    const xhr = new XMLHttpRequest();

    //abrir la conexion
    xhr.open("GET", api, true);
    //On Load
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText).results);
      } else {
        reject(Error(xhr.statusText));
      }
    };

    //opcional
    xhr.onerror = (error) => reject(error);

    //send
    xhr.send();
  });

descargarUsuarios(52).then(
  (miembros) => imprimirHtml(miembros),
  (error) => console.error(new Error("Hubo un error: " + error))
);

function imprimirHtml(usuarios) {
  let html = "";
  usuarios.forEach((usuario) => {
    console.log(usuario);
    html += `
    <ul>
    <li>Nombre: ${usuario.name.title} ${usuario.name.first} ${usuario.name.last}</li>
    <li>Email: ${usuario.email}</li>
    <li>Pais: ${usuario.nat}</li>
    <li>Foto: <img src="${usuario.picture.medium}"></li>
    </ul>
    `;
  });
  const contenedorApp = document.querySelector('#app')
  contenedorApp.innerHTML = html;
}
console.log("La proxima clase comenzar con capitulo 28")