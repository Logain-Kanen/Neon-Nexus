
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


let breakfastProduct = [];
let lunchProduct = [];
let dinnerProduct = [];
let desertProduct = [];
let drinksProduct = [];

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

   else if(madeProduct.category == "Desert")
   {
      desertProduct.push(madeProduct);
   }

   else if(madeProduct.category == "Drinks")
   {
      drinksProduct.push(madeProduct);
   }

   else {
      console.log("Error made while pushing into Category Array");
   }
}

let cart = [];

function addToCart(name){
   for(let i=0;i<products.length;i++){
      if(name===products[i].name){
         cart.push(products[i])
         console.log(cart)
      }
   }
   
}



