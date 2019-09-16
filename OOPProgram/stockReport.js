const fs = require('fs');
const stockReport = fs.readFileSync('stockReport.json','utf8');
const jsonObject = JSON.parse(stockReport);
try{

    class Stock{
    constructor(name,share,price){
        this.name=name;
        this.share=share;
        this.price=price;
    }
    total() {
        return this.share*this.price;
    }
}
     for(let i = 0; i < jsonObject.Stock.length; i++){
         const stockName = jsonObject.Stock[i].StockNames;
         const stockShare = jsonObject.Stock[i].NumberofShare;
         const stockPrice = jsonObject.Stock[i].Share;

         const data = new Stock(stockName,stockShare,stockPrice);
         const total = data.total();
         console.log(`Name of Stock is ${stockName} & Share is ${stockShare}`);
         console.log(`Value of Stock is ${stockPrice}`);
         console.log(`Total value of Stock ${total} \n`);
         
     }
}
catch(e){
    console.log(e.message);
}