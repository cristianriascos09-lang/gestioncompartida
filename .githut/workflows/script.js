document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    let autor = document.getElementById("autor").value;
    let descripcion = document.getElementById("descripcion").value;

    fetch("guardar.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `autor=${autor}&descripcion=${descripcion}`
    }).then(() => {
        cargarDatos();
        document.getElementById("formulario").reset();
    });
});

function cargarDatos() {
    fetch("obtener.php")
    .then(res => res.json())
    .then(data => {
        let lista = document.getElementById("lista");
        lista.innerHTML = "";

        data.forEach(item => {
            lista.innerHTML += `
                <p><strong>${item.autor}</strong>: ${item.descripcion}</p>
            `;
        });
    });
}

cargarDatos();