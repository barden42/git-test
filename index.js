const removeStr = require("./removeStr");

const product = [
    {
        name: "Sashimi",
        price: 15,
        display: function() {return this.name + ": " + this.price}
    },
    {
        name: "Maki saumon",
        price: 3,
        display: function() {return this.name + ": " + this.price}
    },
    {
        name: "Sushi saumon",
        price: 5,
        display: function() {return this.name + ": " + this.price}
    }, 
];

product.sort(function(a, b) {
    if (a.price < b.price) {
        return 1;
    } else if (a.price > b.price) {
        return -1;
    } else {
        return 0;
    }
});

for (let i = 0; i < product.length; i++) {
    console.log(product[i].display());
    console.log(display(product[i]));
}

function display(obj) {
    return obj.name + ": " + obj.price
}

function plouf() {
    console.log("Conflit mon pote !");
}
