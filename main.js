let usuarios = document.getElementById("users");

fetch('https://rickandmortyapi.com/api/character')
    .then(response => {
        if(!response.ok){
            throw new Error("error");
        }
            console.log(response.ok);
            return response.json(); // Convertir la respuesta a formato JSON
    })
    .then(users => {
          // Manipular los datos obtenidos
        users.results.forEach(element => {
            usuarios.innerHTML += `
            <div>
                <img onclick="javascript:this.width=600;this.height=600" ondblclick="javascript:this.width=300;this.height=300" src='${element.image}' />
                <p>${element.name}</p>
            </div>`;
        });
    })
    .catch(error => {
        console.error('Error:', error); // Manejar cualquier error ocurrido durante la solicitud
    });
