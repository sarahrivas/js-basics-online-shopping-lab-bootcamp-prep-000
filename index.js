var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let newObj = {[item]: Math.floor(Math.random())};
 cart.push(newObj);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  var cartContents = "In your cart, you have "
  if (cart.length === 0) {
    return "Your shopping cart is empty";
  }
  for(var i = 0; i <cart.length; i++) {
    var item = cart[i];
    var itemName = Object.keys(item)[0];
    cartContents += `${itemName} at ${item[itemName]}`;
    if (i !== cart.length - 1) {
      if (cart.length < 3) {
        cartContents += ' and ';
      } else {
        if (i !== cart.length - 2) {
          cartContents += ', and ';
        } else {
          cartContents += ',';
        }
      }
    } else {
      cartContents += '.';
    }
  }
  return cartContents;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
