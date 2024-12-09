let sayi1 = Number(prompt("1. Sayıyı Gir:"));
let islem = prompt("İşlem Seç = (+,-,*,/)");
let sayi2 = Number(prompt("2. Sayıyı Gir:"));

if(islem === "+"){
    console.log("Toplama Sonucu: "+ (sayi1 + sayi2));
    alert("Toplama Sonucu: "+ (sayi1 + sayi2))
}
else if(islem === "-"){
    console.log("Çıkarma Sonucu: "+ (sayi1 - sayi2));
    alert("Toplama Sonucu: "+ (sayi1 - sayi2))
}
else if(islem === "*"){
    console.log("Çarpma Sonucu: "+ (sayi1 * sayi2));
    alert("Toplama Sonucu: "+ (sayi1 * sayi2))
}
else if(islem === "/"){
        console.log("Bölme Sonucu: "+ (sayi1 / sayi2));
    alert("Toplama Sonucu: "+ (sayi1 / sayi2))
}
else{
    alert("Hatalı İşlem Yaptın!!!")
}