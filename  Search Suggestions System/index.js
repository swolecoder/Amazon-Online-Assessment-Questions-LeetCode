const suggestedProducts = function(products, searchWord) {

    if(searchWord.length < 1) return [];
    products.sort((a, b)=> a.localeCompare(b));

    let result = [];

    for(let i=0; i < searchWord.length; i++){

        let filterData = products.filter((d)=> d.slice(0, i+1) === searchWord.slice(0, i+1))
         result.push(filterData.slice(0,3))
    }

   return result
}

let products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse";
console.log(suggestedProducts(products , searchWord));
products = ["havana"], searchWord = "havana";
console.log(suggestedProducts(products , searchWord));