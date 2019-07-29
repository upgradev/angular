var mongoose = require("mongoose");
var faker = require('faker');
var PersonModel =  require('../models/PersonModel');

mongoose.connect('mongodb://localhost:27017/auth_teste', {
    useNewUrlParser: true
});

async function add(n){
    
    try {
        for(let i = 0; i < n; i++){
    
            const p = new PersonModel();
            p.name = faker.name.findName();
            p.country = faker.address.country();
            p.email = faker.internet.email();
            p.company = faker.company.companyName();
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