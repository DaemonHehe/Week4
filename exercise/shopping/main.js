// HTML DOM elements
const itemNameInput = document.getElementById('itemName');
const priceInput = document.getElementById('price');
const quantityInput = document.getElementById('quantity');
const discountInput = document.getElementById('discount');
const itemList = document.getElementById('item-list');
const totalPriceElement = document.getElementById('total-price');
const finalTotalElement = document.getElementById('final-total');

let cartItems = [];

function addItem() {
    const itemName = itemNameInput.value.trim();
    const price = parseFloat(priceInput.value.trim());
    const quantity = parseInt(quantityInput.value.trim());
    const discountPercentage = parseFloat(discountInput.value.trim());

    if (!itemName || isNaN(price) || price <= 0 || isNaN(quantity) || quantity <= 0 || isNaN(discountPercentage) || discountPercentage < 0) {
        alert('Please enter valid item name, price, quantity, and discount.');
        return;
    }

    cartItems.push({ itemName, price, quantity, discountPercentage });

    // Clear the form inputs
    itemNameInput.value = '';
    priceInput.value = '';
    quantityInput.value = '1'; // Reset quantity to 1
    discountInput.value = '0'; // Reset discount to 0

    updateCart();
    updateSummary();
}

function updateCart() {
    itemList.innerHTML = '';

    cartItems.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');

        const itemName = document.createElement('span');
        itemName.textContent = `${item.itemName} (x${item.quantity})`;
        itemDiv.appendChild(itemName);

        const itemPrice = document.createElement('span');
        const itemDiscountAmount = (item.price * item.discountPercentage / 100) * item.quantity;
        const totalItemPrice = (item.price * item.quantity) - itemDiscountAmount;
        itemPrice.textContent = `$${totalItemPrice.toFixed(2)} (Discount: ${item.discountPercentage}%)`;
        itemDiv.appendChild(itemPrice);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeItem(index);
        itemDiv.appendChild(removeButton);

        itemList.appendChild(itemDiv);
    });
}

function removeItem(index) {
    cartItems.splice(index, 1);

    updateCart();
    updateSummary();
}

function updateSummary() {
    let totalPrice = 0;

    cartItems.forEach(item => {
        const itemDiscountAmount = (item.price * item.discountPercentage / 100) * item.quantity;
        const totalItemPrice = (item.price * item.quantity) - itemDiscountAmount;
        totalPrice += totalItemPrice;
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);

    finalTotalElement.textContent = totalPrice.toFixed(2);
}
