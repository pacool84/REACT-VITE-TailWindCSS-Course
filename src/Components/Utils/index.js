/*
 * This function calculates total price of a new order
 * @param {Array} products carProduct: Array of objects
 * @return{number} Total Price
 */
export const totalPrice = (products) => {
  let sum = 0;
  products.forEach((product) => (sum += product.price));
  return sum;
};
