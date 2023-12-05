document.addEventListener('DOMContentLoaded', function () {
    const incrementBtns = document.querySelectorAll('.increment-btn');
    const decrementBtns = document.querySelectorAll('.decrement-btn');
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');

    incrementBtns.forEach(btn => {
        btn.addEventListener('click', incrementQuantity);
    });

    decrementBtns.forEach(btn => {
        btn.addEventListener('click', decrementQuantity);
    });

    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', addToCart);
    });

    function incrementQuantity(event) {
        const quantityElement = event.target.parentNode.querySelector('.quantity-value');
        const currentQuantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = currentQuantity + 1;

        updateTotalPrice(event.target.parentNode.parentNode);
    }

    function decrementQuantity(event) {
        const quantityElement = event.target.parentNode.querySelector('.quantity-value');
        const currentQuantity = parseInt(quantityElement.textContent);
        if (currentQuantity > 1) {
            quantityElement.textContent = currentQuantity - 1;
            updateTotalPrice(event.target.parentNode.parentNode);
        }
    }

    function addToCart(event) {
        const cartItem = event.target.parentNode;
        const quantity = parseInt(cartItem.querySelector('.quantity-value').textContent);
        const price = parseFloat(cartItem.querySelector('.item-price').textContent.replace('Rs.', ''));
        const totalPrice = quantity * price;
        const productName = cartItem.querySelector('.item-name').textContent;
        alert(`Added to cart: ${quantity} x ${productName}`);


        // Update the total price
        cartItem.querySelector('.total-price').textContent = totalPrice;

    }

    function updateTotalPrice(cartItem) {
        const quantity = parseInt(cartItem.querySelector('.quantity-value').textContent);
        const price = parseFloat(cartItem.querySelector('.item-price').textContent.replace('Rs.', ''));
        const totalPrice = quantity * price;

        // Update the total price
        cartItem.querySelector('.total-price').textContent = totalPrice;
    }
});
