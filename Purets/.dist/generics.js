"use strict";
const score = [];
const names = [];
function identity1(val) {
    return val;
}
function identity2(val) {
    return val;
}
function identity3(val) {
    return val;
}
identity3("3");
identity3(3);
identity3(true);
identity3("Arcit");
function identity4(val) {
    return val;
}
// identity4<bottle>({/})
function getproducts(products) {
    const index = 4;
    return products[index];
}
const getmoreproducts = (products) => {
    const index = 34;
    return products[index];
};
function hey(val1, val2) {
    return {
        val1,
        val2
    };
}
class sell {
    constructor() {
        this.cart = [];
    }
    addtocart(products) {
        this.cart.push(products);
    }
}
