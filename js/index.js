// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  //Step1

  const price = document.querySelector('.price span').innerText;
  console.log (parseFloat(price).toFixed(2));

  const quantity = document.querySelector('.quantity input').value;
  console.log (parseInt(quantity));

  //Step3
  subtotalPrice = price * quantity;
  console.log (subtotalPrice.toFixed(2));

  //step4
  const subtotalElem = document.querySelector('.subtotal span').innerText;
  subtotalElem.innerText = subtotalPrice;

};
updateSubtotal()



/*function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
};*/

