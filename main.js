
var timso = document.getElementById("timso").onclick = function(){
    var songuyen = document.getElementById("songuyen").value*1;
    var a = songuyen / 100;
    a = parseInt(a)
    var b = songuyen % 100 / 10;
    b = parseInt(b)
    var c = songuyen % 10;
    c = parseInt(c);
    // console.log(tram,chuc,donvi);
    var d=0;
    // Xử lí
    /*
    3 5 1
    */ 
   if(a>b){
    d = a; a = b; b = d; //d = 7 a = 4 b = 7
   }
   if(a>c){
    d = a; a = c; c = d; //d = 3 a = 1 c = 3
   }
   if(b>c){
    d = b; b = c; c = d; // d = 5 b = 3 c = 5
   }
   var reutunr = "Thứ tự tăng dần là: " + a + b + c;
   document.getElementById("outtput").innerHTML=reutunr
}







/*

Bài 2 Chào hỏi
 */
var chaohoi = document.getElementById("chaohoi").onclick = function () {
    //Đầu vào lấy dữ liệu của các thành viên trong gia đình
    var user = document.getElementById("thanhvien").value;
    //Xử lý dữ liệu các thành viên trong gia đình
    if (user == "Bố") {
        result = "Xin chào bố <3"
    }
    else if (user == "Mẹ") {
        result = "Xin chào mẹ <3"
    }
    else if (user == "Anh") {
        result = "Xin chào anh hai <3"
    }
    else {
        result = "Xin chào em gái <3"
    }
    //Đầu ra
    document.getElementById("output2").innerHTML = result;
}


/*
Bài 3 Xuất ra có bao nhiêu số lẻ bao nhiêu số chẵn
*/
var dem = document.getElementById("tinh").onclick = function () {
    //Đầu vào lấy dữ liệu của số nguyên
    var nhapso = document.getElementById("nhapso").value * 1;
    //Xử lí 
    //B1 tách 3 số nguyên ra thành số riêng biệt
    //B2 xét điều kiện số chẵn số lẻ
    //B3 xét trường hơp
    // trăm chục đơn vị lẻ
    // trăm chục đơn vị chẵn
    // trăm chẵn chục chẵn đơn vị lẻ
    // trăm lẻ chục lẽ đơn vị chẵn
    // trăm chẵn chục lẻ đỡn vị chẵn
    // trăm lẻ chục chẵn đơn vị lẻ
    var tram = nhapso / 100;
    tram = parseInt(tram);
    var chuc = nhapso / 10 % 10;
    chuc = parseInt(chuc);
    var donvi = nhapso % 10;
    var donvi = parseInt(donvi);
    if (nhapso < 1000) {
        if (tram % 2 == 0 && chuc % 2 == 0 && donvi % 2 == 0) {
            result1 = "Có 3 số chẵn <3";
        }
        else if (tram % 2 != 0 && chuc % 2 != 0 && donvi % 2 != 0) {
            result1 = "Có 3 số lẻ <3";
        }
        else if (tram % 2 != 0 && chuc % 2 == 0 && donvi % 2 != 0) { //lẻ chẵn lẻ
            result1 = "Có 2 số lẻ 1 số chẵn <3";
        }
        else if (tram % 2 != 0 && chuc % 2 == 0 && donvi % 2 == 0) { //lẻ chẵn chẵn
            result1 = "Có 2 số chẵn 1 số lẻ <3";
        }
        else if (tram % 2 != 0 && chuc % 2 != 0 && donvi % 2 == 0) { //lẻ lẻ chẵn
            result1 = "Có 2 số lẻ 1 số chẵn <3";
        }
        else if (tram % 2 == 0 && chuc % 2 == 0 && donvi % 2 != 0) { //chẵn chẵn lẻ 
            result1 = "Có 2 số chẵn 1 số lẻ <3";
        }
        else if (tram % 2 == 0 && chuc % 2 != 0 && donvi % 2 == 0) { //chẵn lẻ chẵn
            result1 = "Có 2 số chẵn 1 số lẻ <3";
        }
        else if (tram % 2 == 0 && chuc % 2 != 0 && donvi % 2 != 0) { //chẵn lẻ lẻ
            result1 = "Có 2 số lẻ 1 số chẵn <3";
        }
    }
    else {
        result1 = "Lỗi!!!"
    }
    //Đầu ra 
    document.getElementById("output3").innerHTML = result1;
}

/*
Bài 4 Viết chương trình nhập 3 cạnh tam giác vuông và cho biết đó là tam giác gì
*/
var timtg = document.getElementById("timtg").onclick = function () {
    //Đầu vào lấy dữ liệu 2 cạnh góc vuông
    var cgv1 = document.getElementById("nhapcgv1").value * 1;
    var cgv2 = document.getElementById("nhapcgv2").value * 1;
    var chuyen = document.getElementById("nhapch").value * 1;
    var sum = chuyen*chuyen;
    //Xử lý
    /*
    nếu tam giác cân thì cgv1 = cgv2 
    nếu tam giác đều thì cgv1 = cgv2 = ch
    nếu tam giác vuông thì ch = bình phương 2 cạnh góc vuông
    */
    if(cgv1 == cgv2 && cgv1 != chuyen ){
        result3 = "Tam giác cân";;
    }
    else if(cgv1 == cgv2 && cgv1 == chuyen && cgv2 == chuyen){
        result3 = "Tam giác đều";
    }
    else if(sum == cgv1*cgv1 + cgv2*cgv2){
        result3 = "Tam giác vuông";
    }
    else{
        result3 = "Tam giác thường";
    }
    document.getElementById("output4").innerHTML = result3;
}