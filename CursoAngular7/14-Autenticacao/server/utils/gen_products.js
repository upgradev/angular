var mongoose = require("mongoose");
var faker = require('faker');
var ProductModel =  require('../models/ProductModel');

mongoose.connect('mongodb://localhost:27017/auth_teste', {
    useNewUrlParser: true
});

async function add(n){
    
    try {
        for(let i = 0; i < n; i++){
    
            const p = new ProductModel();
            p.name = faker.commerce.productName();
            p.department = faker.commerce.department();
            p.price = faker.commerce.price();
            await p.save();
            
        }
    } catch (error) {
        console.log(error);
    }
    
    
}

add(100).then(() => {
    console.log("OK gerado");
    mongoose.disconnect();
});