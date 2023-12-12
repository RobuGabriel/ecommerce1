let listCart = [];

function checkCart() {
    const cartFromLocalStorage = localStorage.getItem('cart');
    if (cartFromLocalStorage) {
        listCart = JSON.parse(cartFromLocalStorage);
    }

}

checkCart();
addCartToHtml();

function addCartToHtml() {
    let listCartHTML = document.querySelector('.returnCart .list');
    listCartHTML.innerHTML = '';
    let totalQuantityHTML = document.querySelector('.totalQuantity');
    let totalPriceHTML = document.querySelector('.totalPrice');

    let totalQuantity = 0;
    let totalPrice = 0;

    if (listCart) {
        listCart.forEach(product => {
            if (product) {
                let newP = document.createElement('div');
                newP.classList.add('item');
                newP.innerHTML = `
                <img src="${product.image}" alt="">
                        <div class="info">
                            <div class="name">${product.name}</div>
                            <div class="price">${product.price}</div>
                        </div>
                        <div class="quantity">${product.quantity}</div>
                        <div class="returnPrice">${product.price * product.quantity}</div>
                    `;
                listCartHTML.appendChild(newP);
                totalQuantity = totalQuantity + product.quantity;
                totalPrice = totalPrice + product.price * product.quantity;
            }
        });
    }

    totalQuantityHTML.innerText = totalQuantity;
    totalPriceHTML.innerHTML = totalPrice + 'Lei';
    
}


