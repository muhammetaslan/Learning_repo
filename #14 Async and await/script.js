/**
 * async ile oluşturduğumuz bir fonsksiyon dışarı otomatik olarak Promise objesi gönderir.
 * 
 * Böylece async ile then ile bu fonksiyonları yakalayabilriz. 
 * 
 */
async function fn(){
    return 'aslan';
}

fn().then((parameter)=>{
    console.log(parameter);
});

/**
 * 
 * Örnek yapalım
 * get product db den ürünü çekecek sorguyu çalıştracak.
 * 
 */

async function getProduct(){
    // await ile burdaki getCategory() fonksiyonun çalışıp sonucu vermesi bekelencek.
    let category = await getCategory();
    
    // görüldüğü gibi getProduct içinde category i kullandık bu sebeple await işimize yapamış oldu.
    let product = await getProduct(category);
}