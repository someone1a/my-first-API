const app = document.querySelector('.container');
const url = 'https://jsonplaceholder.typicode.com/users'
//peticion
fetch(url)
.then(res => res.json())
.then(data => {
  data.forEach(usuario =>{
    //arma elemento p
     const p = document.createElement('p')
     //agrega atributo id
     p.setAttribute('id', usuario.id)
     p.innerHTML = usuario.name
     //agrega funcion para ver detalles
     p.addEventListener('click', function(){
      //abre ventana con info del usuario
        window.location.href= "S./usuario.html?id=${usuario.id}"
     })
     app.appendChild(p)
  });
})
.catch(err => console.log(err))