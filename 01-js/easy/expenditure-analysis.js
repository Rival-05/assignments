/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
    let categories = [];
    let result = [];
    
    transactions.forEach((transaction) => {
        if(!categories.includes(transaction.category)){
          categories.push(transaction.category);
        }
    });
    categories.forEach((category) =>{
    let moneySpent = 0;
    transactions.forEach((transaction) => {
      if(category === transaction.category){
        moneySpent += transaction.price;
      }
    }); 
    result.push({category: category,
      totalSpent : moneySpent
    })
    });
  return result;
}

module.exports = calculateTotalSpentByCategory;
