var products = [
    {id:1,name:'Samsung S8',price:3000},
    {id:2,name:'Samsung S7',price:2000},
    {id:3,name:'Samsung S6',price:1000}
]


function addProduct(pro){

    return new Promise(function(resolve, reject){
        setTimeout(()=>{

            products.push(pro);
            let added = true;

            if(added){
                resolve();
            }else{
                reject('500 error');
            }
        });
    });
}

function getProduct(){

    setTimeout(()=>{
        products.forEach(element => {
            console.log(element.name);
        });
    },1000);
}

/**
 * 
 * promise ile sıraslı işlemleri the yardımı ile aşağıdaki gibi kullanabiliriz.
 * 
 * addproduct calışşsın sonra = then getproduct çalıssın diyerel callbak gerek kalmadan hallettik. birden fazla
 * then ile zincirler oluşturabiliriz.
 * 
 */
addProduct({id:4, name: 'Iphone 12', price: 12000}).then(getProduct).catch(function(err){
    console.log(err);
});
