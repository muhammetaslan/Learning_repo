let value;

// Javascript'te primite tipler haricinde (int, string, float, boolean) kalan tüm değerler objedir.
// array, list vb. obje olan değişkenlerin primite tiplerden farkı ise obje değişkenler sadece veri tutmak işlemi yapmaz.
// aytıca yanlarında ek metotlar getiriler . Misal array objesi yanında sort(), add(), remove(), append()  gibi metotlar ile gelir.

let primite_int = 1;

console.log('primite int ', primite_int);
console.log('typeof primite int ', typeof primite_int);

let obje_test = {
    name : 'muhammet',
    surname: 'aslan',
    birthdate: '14.02.1995',
    age: 26
};

console.log('test obje ', obje_test);

let array_test = [15,18,17,19];
console.log('test array', array_test);