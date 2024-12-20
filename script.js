// Initialisation des variables pour le panier et le prix total
let cart = [];
let totalPrice = 0;

// Fonction pour ajouter un produit au panier
function addToCart(productName, price) {
    // Ajouter l'article au panier
    cart.push({ name: productName, price: price });
    // Mettre à jour le prix total
    totalPrice += price;
    // Mettre à jour l'affichage du panier
    updateCart();
}

// Fonction pour mettre à jour le panier affiché
function updateCart() {
    const cartList = document.getElementById('cart-list');
    const totalPriceElement = document.getElementById('total-price');

    // Réinitialiser l'affichage de la liste
    cartList.innerHTML = '';

    // Ajouter chaque article du panier à la liste
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price} €`;

        // Bouton pour retirer un article du panier
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Retirer';
        removeButton.onclick = () => removeFromCart(index);

        // Ajouter l'article et le bouton à la liste
        li.appendChild(removeButton);
        cartList.appendChild(li);
    });

    // Mettre à jour le prix total affiché
    totalPriceElement.textContent = `Total : ${totalPrice} €`;
}

// Fonction pour retirer un article du panier
function removeFromCart(index) {
    // Retirer le prix de l'article du total
    totalPrice -= cart[index].price;
    // Retirer l'article du panier
    cart.splice(index, 1);
    // Mettre à jour l'affichage du panier
    updateCart();
}

// Gestion de l'envoi du formulaire de commande
document.getElementById('order-form').addEventListener('submit', (event) => {
    event.preventDefault();

    // Vérifier que le panier n'est pas vide
    if (cart.length === 0) {
        alert('Votre panier est vide. Veuillez ajouter des articles avant de commander.');
        return;
    }

    // Récupérer les données du formulaire
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;

    // Vérifier que tous les champs sont remplis
    if (!name || !address) {
        alert('Veuillez remplir tous les champs du formulaire.');
        return;
    }

    // Confirmation de commande
    alert(`Merci pour votre commande, ${name} ! Votre commande sera livrée à l'adresse : ${address}`);

    // Réinitialiser le panier et le formulaire
    cart = [];
    totalPrice = 0;
    updateCart();
    document.getElementById('order-form').reset();
});
