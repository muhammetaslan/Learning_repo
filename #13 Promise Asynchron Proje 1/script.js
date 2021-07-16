/**
 * promise anlamı söz vermek direkt olarak kullanım mantiğida bu şekilde çalışmaktadir.
 * 
 * Promise objesi içinde oluşturduğumuz fonsksiyon iki adet parametre alır
 * 
 * resolve => işlemler doğru şekilde dönen cevap
 * reject => hata işlemleri ile dönen cevap
 * 
 */

//var promise = new Promise(function(resolve, reject){});

/**
 * then ile return edilen sonuçlar hemen arkadan gelen then için de çağrılan fonksiyona 
 * parametre olarak gider. başta sona sıra beklenerek işlemler biter.
 * 
 * Promise nerde işe yarar ; Örneğin DB den veri çekcez ve aldığımız sonuç ile başka bir func ile 
 * yeni bir sorgu yapacaz bu gibi durumlarda ilk sorguyu yapan fonksiyon ilk olarak kesin bitmeli 
 * bu durumlarda then ve promise yapısı ile bloking li bir yapı da kod geliştirile bilir.
 * 
 * Bildiğiniz gibi yoksa işlemler asenkron olarak yapılacaktır.
 * 
 */

new Promise(function(resolve, reject){

    setTimeout(()=>{
        resolve(5);
    }, 1000);
}).then(function(number){
    console.log(number);
    return number*number;
}).then(function(number1){
    console.log(number1);
    return number1*number1;
}).then((number2) => {
    console.log(number2);
});
