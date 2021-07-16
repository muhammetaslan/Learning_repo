// arrow function kendi variable scope'larını oluşturmazlar.

// ES5  de kullanıma bir ornek

let list = {
    name : 'muhammet',
    job: 'muhendis',
    action : function(){
        var self = this;
        this.name.map(function(){
            console.log(`${this.name}`);
        });
    }
}
