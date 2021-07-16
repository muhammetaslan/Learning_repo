
// fonksiyona parametre olarak callback vererek bu değişkeni bir fonksiyon olarak verebiliriz.
function multipleNumber(a,b,c, 
    callback){
    let arr = [];

    // fonksiyona gelen parametrelere arguments ile ulaşabiliriz.
    for(let i=0;i<3;i++){
        arr[i] = callback(arguments[i]*3);
    }
    return arr;
}

function addOne(a){
    return a + 1;
}

let val = multipleNumber(4,8,9,addOne);

console.log(val)


function multipleNumberWithParameterControl(a,b,c, 
    callback){
    let arr = [];
    if(callback && typeof callback === 'function'){
        // fonksiyona gelen parametrelere arguments ile ulaşabiliriz.
        for(let i=0;i<3;i++){
            arr[i] = callback(arguments[i]*3);
        }
    }
    return arr;
}