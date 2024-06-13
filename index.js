    // Variables para manejar el carrito
    let carrito = [];
    const listaProductos = document.getElementById('lista-productos');
    const totalElement = document.getElementById('total');

    // Función para agregar un producto al carrito
    function agregarAlCarrito(nombre, precio) {
        carrito.push({ nombre, precio });
        renderizarCarrito();
    }

    // Función para renderizar el carrito
    function renderizarCarrito() {
        listaProductos.innerHTML = '';
        let total = 0;
        carrito.forEach(producto => {
            const li = document.createElement('li');
            li.textContent = `${producto.nombre}: $${producto.precio}`;
            listaProductos.appendChild(li);
            total += producto.precio;
        });
        totalElement.textContent = `$${total}`;
    }

    //botón de confirmar compra
    document.getElementById('confirmar-compra').addEventListener('click', () => {
        if (carrito.length > 0) {
            alert('Compra confirmada. Gracias por su compra!');
            // Limpia el carrito después de confirmar la compra
            carrito = [];
            renderizarCarrito();
        } else {
            alert('El carrito está vacío. Por favor, agregue productos antes de confirmar la compra.');
        }
    });

    
    document.getElementById('borrar-seleccion').addEventListener('click', () => {
        carrito = [];
        renderizarCarrito();
    });