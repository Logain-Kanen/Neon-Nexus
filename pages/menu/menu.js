import { products } from '../products/products.js';
class menuProduct {
   constructor(category, itemName, itemPrice, itemDescription, shortitemDescription, featuredItem) {
      this.category = category;
      this.itemName = itemName;
      this.itemPrice = itemPrice;
      this.itemDescription = itemDescription;
      this.shortitemDescription = shortitemDescription;
      this.featuredItem = featuredItem;
   }
}


const breakfastProduct = [];
const lunchProduct = [];
const dinnerProduct = [];

for (let i = 0; i < products.length; i++) {
   const currentData = products[i];
   const currentName = products[i].name;

   const madeProduct = new menuProduct(currentData.category, currentData.name, currentData.price, currentData.itemDescription, currentData.shortDescription, currentData.featured);

   if (madeProduct.category == "Breakfast") {
      breakfastProduct.push(madeProduct);
   }

   else if (madeProduct.category == "Lunch") {
      lunchProduct.push(madeProduct);
   }

   else if (madeProduct.category == "Dinner") {
      dinnerProduct.push(madeProduct);
   }

   else {
      console.log("Error made while pushing into Category Array");
   }
}

