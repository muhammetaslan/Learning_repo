// bazı durumlarda fonksiyonun sadece uygulama başında çalışmasını istersek immediate functions kullanılabilir.

(function(name){
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var today =new Date();
    var msg = 'Welcome ' +name+ ' Today is '+days[today.getDay()];
    console.log(msg);
}('Çınar'));