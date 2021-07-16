
const first = () => {
    console.log('hey ı am first');
    second();
};

const second = () => {
    setTimeout(()=>{
        console.log('hey ı am second');
    },2000);
    third();
}

const third = () =>{
     console.log('hey ı am third');
}

first();

/***
 * 
 * Asenkron programlamada işlemler birbirini bloklamaz non-blocking bir işlem yapısı vardır.
 * 
 * 
 */