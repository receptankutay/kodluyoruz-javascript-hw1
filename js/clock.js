let kullaniciAdi = prompt("Lütfen isminizi giriniz.")
let textInfo

if (kullaniciAdi) {
    textInfo = kullaniciAdi
} else {
    textInfo = "Misafir Kullanici"
}

let myName = document.querySelector("#myName")
myName.innerHTML = `${textInfo}`

function getDateTime() {
    var now     = new Date(); 
    var year    = now.getFullYear();
    var month   = now.getMonth()+1; 
    var day     = now.getDate();
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var second  = now.getSeconds(); 
    if(month.toString().length == 1) {
         month = '0'+month;
    }
    if(day.toString().length == 1) {
         day = '0'+day;
    }   
    if(hour.toString().length == 1) {
         hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
         minute = '0'+minute;
    }
    if(second.toString().length == 1) {
         second = '0'+second;
    }   
    var dateTime = day+'/'+month+'/'+year+' '+hour+':'+minute+':'+second;   
     return dateTime;
}

setInterval(function(){
    currentTime = getDateTime();
    document.querySelector("#digital-clock").innerHTML = currentTime;
}, 1000);