// Variables globales
let totalPrice = 0;

// Fonction pour mettre à jour le prix total
function updateTotalPrice() {
  const totalElement = document.getElementById('total-price');
  totalElement.textContent = `Prix total : $${totalPrice}`;
}

// Fonction pour diminuer la quantité d'un article
function decreaseQuantity(item) {
  const quantityElement = item.querySelector('.item-quantity');
  let quantity = parseInt(quantityElement.textContent);
  
  if (quantity > 1) {
    quantity--;
    quantityElement.textContent = quantity;
    updateTotalPrice();
  }
}

// Fonction pour augmenter la quantité d'un article
function increaseQuantity(item) {
  const quantityElement = item.querySelector('.item-quantity');
  let quantity = parseInt(quantityElement.textContent);
  
  quantity++;
  quantityElement.textContent = quantity;
  updateTotalPrice();
}

// Fonction pour supprimer un article
function removeItem(item) {
  const itemElement = item.closest('.item');
  const quantity = parseInt(item.querySelector('.item-quantity').textContent);
  
  itemElement.remove();
  totalPrice -= quantity;
  updateTotalPrice();
}

// Fonction pour changer l'état "aimé" d'un article
function toggleLike(item) {
  const likeButton = item.querySelector('.btn-like');
  likeButton.classList.toggle('liked');
}

// Gestionnaires d'événements
document.addEventListener('click', function(event) {
  if (event.target.matches('.btn-decrease')) {
    const item = event.target.closest('.item');
    decreaseQuantity(item);
  }
  else if (event.target.matches('.btn-increase')) {
    const item = event.target.closest('.item');
    increaseQuantity(item);
  }
  else if (event.target.matches('.btn-remove')) {
    const item = event.target.closest('.item');
    removeItem(item);
  }
  else if (event.target.matches('.btn-like')) {
    const item = event.target.closest('.item');
    toggleLike(item);
  }
});

// Calcul du prix total initial
document.querySelectorAll('.item').forEach(function(item) {
  const quantity = parseInt(item.querySelector('.item-quantity').textContent);
  totalPrice += quantity;
});

// Mise à jour du prix total initial
updateTotalPrice();
