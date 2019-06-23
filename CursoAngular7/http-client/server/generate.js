var mongoose = require('mongoose');
var Product = require('./product');
var Faker = require('faker');

mongoose.connect(
    'mongodb://localhost:27017/http_client',
    {useNewUrlParser: true}
);

async function generateProducts(){
    for(let i =0; i< 10; i++){
        let p = new Product({
            name: Faker.commerce.productName(), 
            department: Faker.commerce.department(),
            price: Faker.commerce.price()
        })

        try {
            await p.save();
        } catch (error) {
            throw new Error("error generating products");
        }
    }

}

generateProducts()
.then(() => {
    mongoose.disconnect();
    console.log("OK");
    
})
