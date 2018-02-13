var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let newObj = {[item]: Math.floor(Math.random() * 100)};
 getCart().push(newObj);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  var cart = getCart();
  var cartContents = "In your cart, you have "
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
    return;
  }
  for(var i = 0; i <cart.length; i++) {
    var item = cart[i];
    var itemName = Object.keys(item)[0];
    cartContents += `${itemName} at $${item[itemName]}`;
    if (i !== cart.length - 1) {
      if (cart.length < 3) {
        cartContents += ' and ';
      } else {
        if (i !== cart.length - 2) {
          cartContents += ', and ';
        } else {
          cartContents += ', ';
        }
      }
    } else {
      if (cart.length > 1) {
        if (cart.length === 2) {
          cartContents += ' and ';
        } else {
          cartContents += ',';
        }
      } else {
        cartContents += '.';
      }
    }
  }
   console.log(cartContents);
}

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += Object.values(cart[i])[0];
  }
  return total;
}

function removeFromCart(item) {
  var matchingItem;
  for (var i = 0; i < cart.length; i++) {
    total += Object.values(cart[i])[0];
  }  
}

function placeOrder(cardNumber) {
  // write your code here
}
