document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalAmount = document.getElementById('total-amount');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    function updateCartDisplay() {
        cartItemsContainer.innerHTML = '';
        total = 0;

        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <p>${item.title}</p>
                <p>$${item.price.toFixed(2)}</p>
                <button class="remove-from-cart" data-index="${index}">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItem);
            total += item.price;
        });

        totalAmount.textContent = total.toFixed(2);
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    }

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-from-cart')) {
            const index = parseInt(e.target.dataset.index);
            removeFromCart(index);
        }
    });

    updateCartDisplay();
});
