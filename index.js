const products = [
    { id: 1, name: 'Milanesa', price: 3999 },
    { id: 2, name: 'Pechuga', price: 9999 },
    { id: 3, name: 'Patamuslo', price: 5555 },
    { id: 4, name: 'Maple de huevos', price: 3555 },
 ];
 
 
 const cart = [];
 
 
 function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = `
            <h5>${item.name}</h5>
            <p>Precio: $${item.price}</p>
            <p>Cantidad: ${item.quantity}</p>
            <button class="btn btn-danger" onclick="removeFromCart(${item.id})">Eliminar</button>
        `;
        cartItemsContainer.appendChild(cartItemDiv);
    });
    updateTotal();
 }
 
 
 function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    document.getElementById('cart-count').innerText = cart.reduce((sum, item) => sum + item.quantity, 0);
    renderCart();
 }
 
 
 function removeFromCart(productId) {
    const cartIndex = cart.findIndex(item => item.id === productId);
    if (cartIndex !== -1) {
        if (cart[cartIndex].quantity > 1) {
            cart[cartIndex].quantity--;
        } else {
            cart.splice(cartIndex, 1);
        }
        document.getElementById('cart-count').innerText = cart.reduce((sum, item) => sum + item.quantity, 0);
        renderCart();
    }
 }
 
 
 function updateTotal() {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById('cart-total').innerText = total.toFixed(2);
 }
 
 
 document.addEventListener('DOMContentLoaded', () => {
    renderCart();
 });
 