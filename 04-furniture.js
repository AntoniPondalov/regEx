function furniture(arr){
    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/;
    let furniture = [];
    let totalPrice= 0;
 
    let command = arr.shift();
    while(command !== "Purchase" ){
        let match = pattern.exec(command);
        if(match){
            let {name, price, quantity} = match.groups;
            price = +price;
            quantity = +quantity;
 
            let furniturePrice = price * quantity;
            totalPrice += furniturePrice;
            furniture.push(name);
 
        }

        command = arr.shift();
    }
    console.log(`Bought furniture:`);
    if(furniture.length > 0){
        console.log(furniture.join("\n"));
       
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'])