// You have two array price and quantity .You have to print
// the total cart price

//sample input ;
const price = [100, 20, 40];
const quantity = [2, 1, 2];

//output = 300;

function cartTotal(price, quantity) {
    let sum = 0;
    for (let i = 0; i < price.length; i++){
        sum += price[i] * quantity[i];
    }
    console.log(sum)
}
cartTotal(price, quantity)