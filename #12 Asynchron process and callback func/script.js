var products = [
    {id:1,name:'Samsung S8',price:3000},
    {id:2,name:'Samsung S7',price:2000},
    {id:3,name:'Samsung S6',price:1000}
]


function addProduct(pro, callback){

    setTimeout(()=>{
        products.push(pro);
        callback();
    },2000);
}

function getProduct(){

    setTimeout(()=>{
        products.forEach(element => {
            console.log(element.name);
        });
    },1000);
}

addProduct({id:4, name: 'Iphone 12', price: 12000}, getProduct);
getProduct();